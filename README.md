### CLI
    Instalal angular cli
        npm install -g @angular/cli
    Create App
        ng new {AppName} --no-strict --standalone false --routing false
    Ini server
        ng serve
    Create Component (ng g c {name})
        ng generate component {ComponentName}
    Create Directive
        ng g d better-directive

npm install --save bootstrap@3







### Work flow
    index.html -> cli compila y ejecuta main.ts
   
    main.ts -> es nuestro primer código js a cargar, este código 
    básicamente inicia la app (app/app.module.ts)
    
    app.module.ts -> Tenemos la construcción de como incluiremos 
    nuestras páginas, tenemos en bootstrap :[] los 
    componentes a cargar al iniciar la app (index.html).
    
    app.component.ts -> instancia la vista y sus estilos

    spec.ts files are for testing




### Course fundamentals

    ## COMPONENT
        Normally we want to create our components inside app folder, 
        and each component will have it's own directory.
        
        Also our app.component.html will notice new components, 
        not our index.html.
        
        Component is a "typescript class" (in reality angular needs to
        know that it's a component, not a regular class), angular can instanciate it
        so we need an special decorator in order to use it 
        (@Component({ selector: 'should-b-unique', templateUrl: './path.html' })).

        It would look like this:
            app/server/server.component.ts <- @Component({}) export class ServerComponent{}
            app/server/server.component.html <- html

        // MODULE
        And we need to add this component in app.module.ts inside 
        *bootstrap*, so we can configure our components
        
        normally we will use one app module, but in larger projects we 
        can have multiple modules.

        // standalone components are new, thats why most of the legacy code is in ngModule, 
        standalone is like angular1EduVersion (graphs, newscreens) { template: '<tag>', ....}

        // view encapsulation, in order to use or not default css, by default views are encapsulated
    ## DATABINDING
        Comunication between business logic (ts) and template, we can achieve this by:
        {{variable // interpolation}} [property // disabled] ="data" //prop binding     TS ->  template (output data) one way binding
        (event) = "expression" Event binding                                            template ->  TS (React to client events) one way binding
        [(ngModel)] = "data"                                                            template <-> TS Two way binding

        Two way binding
            We need to enable ngModel, so we need to add *FormsModule* to imports[] in AppModule, and obviously import {...} from ...
            This also allows us to send a form without reloading
        
        Local refrence in template
        <input #localRef>    <- we can use localRef in all of our template, but not in typescript, the way to use it is binding into a function
        tsFunction = (inputValue: HTMLInputElement)

        We can achieve the same with @ViewChild
    
    ## Directives conditionals(if else), style, class, for
        if else -> symbols: * , #    in angular 17 there is another syntax more friendly (like laravel)
        * structural directive because it changes the dom, we use it in if or for.
        
        Instructions in the DOM, components are kind of directives, for, if are directives also

        Custom (not in deep): <p turnGreen>Turns green</p> -> @Directive({selector: '[turnGreen]'}) export class turngreendirective{}

        ## IF -> * <-
        we write it like this: <p *ngIf="isBool"> we need the *star*

        ## Else ->#<- this is a local reference
        In order to perform an else we need to mark with ng-template and a local reference where we want to attack in the if, so:
        <p *ngIf="isPretty; else isNotPretty">User is pretty</p>  ----> <ng-template #isNotPretty><p> is not pretty</p></ng-template>

        ## For -> * <-

        Model: A ts file that will define our business logic, basically it helps typescript define how an array of models should look like.
        Example i have from the DB a list of users, every user will have age, name etc.
        So i can create a model in ts, that defines that age will be number, name string etc.
        And then if i retrieve a single user or the list of all users i can use this model like:
        userList : User[] = [] or user : User = {name, age....}

    // BELOW \\ CHECK angular-second-app more details there! :D grand parents, grand sonds xdd binding events or even props

    ## Bind prop from parent component to child htmldad -> [childProp]="parentElem"     |  @Input
    tsChild -> @Input() childProp: ...;
        *PROP BINDING*
        
        eg: in our app.html we have -> <app-server-element 
        *ngFor="let selement of serverElements" [element]="selement"></app-server-element>
        
        and in our app-server-element.ts we have in order to notice -> 
        @Input() element: {type: string, name: string, content: string};

        We can add alias for example... [alias]="parentElem" -> Input('alias')

    ## Bind event from parent component to child htmldad -> (childEvent)="parentEvent($event)"   | @Output
        dad js -> parentEvent = (childData: {childProp: string, childProp2: number})

        child js -> @Output() childEvent = new EventEmitter<{childProp: string, childProp2: number}>();
                    customClick = () => this.childEvent.emit({childProp: this.child, childProp2: ..}); 
                    // creating a w.e function for child template and targeting the function we send from dad

    // END BELOW \\

    ## CUSTOM DIRECTIVE
        @Directive({selector: '[appMyDirectiveName]'}) // [] <- when I add to element
        export class MyDirectiveName{constructor (private elementRef: ElementRef); ngOnInit() => this.elementRef.nativeElement.style.bgColor = "red"}

        Import that directive in *module declarations* and use it wherever!

        // this above aint the best
        
        // below better
        ng g d better-directive
        constructor(private eleRef: ElementRef, private renderer: Renderer2); ngOnInit() => this.renderer.setStyle(this.eleRef.nativeElement, 'bgcolor', 'blue');

        @HostListener('mouseenter') mouseOver(eventData: event) => { this.renderer.setStyle(....)} same with @HostListener('mouseleave')

        // easier way below
        @HostBinding('style.bgcolor') bgColor: string = 'transparent'; @Hostlistener... => {this.bgColor = 'red' }




    // Services & Dependency Injection
        So basically a service is a class that we use in order to share the logic that will be common in our app, also is a nice way of communicating with our components,
        why? Because for example we can use a service to get the common logic between a function that will be used in all of our app.
        In the other way we can communicate our components thanks to singleton and service hierarchy.

        That's how a service look like:  logging.service.ts -> export class LoggingService{ logStatusChange(status: string) => console.log("Service logger with status: " + status) }.

        // import module
        *Service inject to another service* <- that's what we can achieve and also we can inject it in all the app components.
        @NgModule({ ... , providers: [OurProvider]})

        So if we want to use in a component we can instanciate it via constructor -> 
        constructor(private accountsService: AccountsService) {} <- and now we can use it in this component with this.accountsService
        If we call via @Component({..., providers: [OurProvider] }) <- we get a factory so it's a new instance
        If we don't call it, we can use it anyways cause we imported it already in module, so it will be a single instance of parent :D 

        // import app.component
        *Service inject to all app components but not inside another service* -> thanks to @Component({..., providers: [OurProvider]})

        Service injected to another service, we can see this in our udemy task 5, but anyway:
        In our main service the one that will use the service, we have to firstly allow to be so with : @Injectable()

        Then we have to call to the constructor -> constructor(private loggingService: LoggingService) {} and now we can use another service


        // import parentComponent
        *Service inject to all component siblings* -> thanks to @component({..., providers: [OurProvider] } )

        *Communicate event/prop binding better way*
        Main service: statusUpdated = new EventEmitter<string>(); (To allow communication in our service logic)

        The emitter component will: this.accountService.statusUpdated.emit(status) <- *statusUpdated* called thanks to constructor prop call this.accountService
        
        And the receiver component will: this.accountService.statusUpdated.subscribe( (status:string) => alert(status + "received")) ->
        subscribed and as a callback function will get the emit value!




    Routing
        As a prop binding, /route <- correct    , incorrect -> route  // route is a relative path

        route observables subscribe to a possibly changed route and update values from component
    Observables

    Forms

    Pipes

    Http

    Authentication

    Optimizations & NgModules

    Deployment

    Animations & Testing



    Changes:
    @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
    @ContentChild('serverContentInput', {static: true}) serverContentInput: ElementRef;


    LifeCycle: check in deep
    ngOnChanges: At the start when component created, or whenevber our bound input prop changes, @Input receive new value
    ngOnInit: Once the component is init
    ngDoCheck: Every change detection run
    ngAfterContentInit: when ng content is initialize
    ngAfterContentChecked: when ng content is checked
    ....
