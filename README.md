### CLI
    Instalar angular cli
        npm install -g @angular/cli
    Crear app
        ng new {AppName} --no-strict --standalone false --routing false
    Iniciar server
        ng serve
    Crear componente (ng g c {name})
        ng generate component {ComponentName}

npm install --save bootstrap@3









### Work flow
    index.html -> cli compila y ejecuta main.ts
    
    main.ts -> es nuestro primer código js a cargar, 
    este código básicamente inicia la app (app/app.module.ts)
    
    app.module.ts -> Tenemos la construcción de como incluiremos 
    nuestras páginas, tenemos en bootstrap :[] los componentes 
    a cargar al iniciar la app (index.html).
    
    app.component.ts -> instancia la vista y sus estilos

    spec.ts files are for testing




### Course fundamentals

    ## COMPONENT
        Normally we want to create our components inside app 
        folder, and each component will have it's own directory.
        
        Also our app.component.html will notice new components, 
        not our index.html.
        
        Component is a "typescript class" (in reality angular 
        needs to know that it's a component, not a regular class), 
        angular can instanciate it
        so we need an special decorator in order to use it 
        (@Component({ selector: 'should-b-unique', templateUrl: './path.html' })).

        It would look like this:
            app/server/server.component.ts <- 
            @Component({}) export class ServerComponent{}
            
            app/server/server.component.html <- html

        // MODULE
        And we need to add this component in app.module.ts 
        inside *bootstrap*, so we can configure our components
        
        normally we will use one app module, but in larger 
        projects we can have multiple modules.

        // standalone components are new, thats why most of the legacy 
        code is in ngModule, standalone is like angular1EduVersion 
        (graphs, newscreens) { template: '<tag>', ....}

    ## DATABINDING
        Comunication between business logic (ts) 
        and template, we can achieve this by:
        
        {{variable // interpolation}} [property // disabled] ="data" //prop binding     
        TS ->  template (output data) one way binding
        
        (event) = "expression" Event binding                                            
        template ->  TS (React to client events) one way binding
        
        [(ngModel)] = "data"                                                            
        template <-> TS Two way binding

        Two way binding
            We need to enable ngModel, so we need to add *FormsModule* to imports[] 
            in AppModule, and obviously import {...} from ...
        
    
## Directives conditionals(if else), style, class, for
        if else -> symbols: * , #    in angular 17 there is another 
        syntax more friendly (like laravel)
        * structural directive because it changes the dom, we use it in if or for.
        
        Directives are instructions in the DOM, components are 
        kind of directives: for, if are directives also

        Custom (not in deep): <p turnGreen>Turns green</p> -> 
        @Directive({selector: '[turnGreen]'}) export class turngreendirective{}

        ## IF -> * <-
        we write it like this: <p *ngIf="isBool"> we need the *star*

        ## Else ->#<- this is a local reference
        In order to perform an else we need to mark with ng-template 
        and a local reference where we want to attack in the if, so:
        <p *ngIf="isPretty; else isNotPretty">User is pretty</p>  ----> 
        <ng-template #isNotPretty><p> is not pretty</p></ng-template>

        ## For -> * <-

   ## Ended for now, more in next repositories
    
    Services & Dependency Injection

    Routing

    Observables

    Forms

    Pipes

    Http

    Authentication

    Optimizations & NgModules

    Deployment

    Animations & Testing

# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
