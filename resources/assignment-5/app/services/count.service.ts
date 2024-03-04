export class CountClickService {
    clicks = 0;

    addClick = () => {
        this.clicks++;
        console.log(this.clicks);
    }
}