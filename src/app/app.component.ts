import { Component } from '@angular/core';
import { timer } from 'rxjs';
import '@gugadev/wc-stories';

export interface user{
  name:string,
  imageURL:string
}
export interface storie{
  user:user,
  images:string[]
  index:number[]
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-wcstories';
  storieIndex: number = 0;
  imgIndex: number = 0;
  imgProgress: number = 50;
  countRotation: number = 1;
  crrRotationDeg: number = 0;
  // const cub: HTMLDivElement = document.querySelector('.cub');
  stories: storie[] = [
    {
    user: {
    name: 'crawlgossip',
    imageURL: 'https://picsum.photos/id/1/250/450',
    },
    images: [
    'https://picsum.photos/id/1/250/450',
    'https://picsum.photos/id/2/250/450',
    'https://picsum.photos/id/3/250/450',
    'https://picsum.photos/id/4/250/450',
    'https://picsum.photos/id/5/250/450',
    ],
    index: [0,1,2,3,4],
    },
    {
    user: {
    name: 'cohortmandrake',
    imageURL: 'https://picsum.photos/id/6/250/450',
    },
    images: [
    'https://picsum.photos/id/6/250/450',
    'https://picsum.photos/id/7/250/450',
    'https://picsum.photos/id/8/250/450',
    'https://picsum.photos/id/9/250/450',
    'https://picsum.photos/id/10/250/450',
    'https://picsum.photos/id/6/250/450',
    'https://picsum.photos/id/12/250/450',
    'https://picsum.photos/id/13/250/450',
    'https://picsum.photos/id/14/250/450',
    ],
    index: [0,1,2,3,4,5,6,7,8],
    },
    {
    user: {
    name: 'greg_green',
    imageURL: 'https://picsum.photos/id/6/250/450',
    },
    images: [
    'https://picsum.photos/id/15/250/450',
    'https://picsum.photos/id/16/250/450',
    'https://picsum.photos/id/17/250/450',
    'https://picsum.photos/id/18/250/450',
    'https://picsum.photos/id/19/250/450',
    ],
    index: [0,1,2,3,4],
    },
    {
    user: {
    name: 'australians12',
    imageURL: 'https://picsum.photos/id/2/250/450',
    },
    images: [
    'https://picsum.photos/id/2/250/450',
    'https://picsum.photos/id/21/250/450',
    ],
    index: [0,1],
    },
    {
    user: {
    name: 'graindar',
    imageURL: 'https://picsum.photos/id/22/250/450',
    },
    images: [
    'https://picsum.photos/id/22/250/450',
    'https://picsum.photos/id/23/250/450',
    'https://picsum.photos/id/24/250/450',
    'https://picsum.photos/id/25/250/450',
    'https://picsum.photos/id/26/250/450',
    'https://picsum.photos/id/27/250/450',
    'https://picsum.photos/id/28/250/450',
    'https://picsum.photos/id/29/250/450',
    'https://picsum.photos/id/30/250/450',
    'https://picsum.photos/id/31/250/450',
    ],
    index: [0,1,2,3,4,5,6,7,8,9],
    },
    {
    user: {
    name: 'elegancekat',
    imageURL: 'https://picsum.photos/id/32/250/450',
    },
    images: [
    'https://picsum.photos/id/32/250/450',
    'https://picsum.photos/id/33/250/450',
    'https://picsum.photos/id/34/250/450',
    'https://picsum.photos/id/35/250/450',
    'https://picsum.photos/id/36/250/450',
    'https://picsum.photos/id/37/250/450',
    ],
    index: [0,1,2,3,4,5],
    },
    ];
  startImgProgress!: () => void;
  imgInterval!: NodeJS.Timeout;

  constructor(){
  }
  nextFace(){
    console.log("nextface")
    if (this.stories[this.storieIndex].images[this.imgIndex + 1]) {
      this.imgIndex++;
      this.imgProgress = 0;
      return;
    } else if (!this.stories[this.storieIndex + 1]) {
      console.log("end")
      this.storieIndex = 0;
      this.imgIndex = 0;
      return;
    }
  
    this.storieIndex++;
    this.imgIndex = 0;
    this.countRotation++;
    this.crrRotationDeg += 90
  
    if (!this.stories[this.storieIndex]) {
      console.log("end")
      this.storieIndex = 0;
    }
  
    
    this.rotateCub(this.crrRotationDeg);
  }
  prevFace(){
    console.log("prevface")
    if (this.stories[this.storieIndex].images[this.imgIndex - 1]) {
    this.imgIndex--;
    this.imgProgress = 0;
    return;
  }

  if (this.crrRotationDeg <= 0) return;

  this.storieIndex--;
  this.countRotation--;
  this.crrRotationDeg -= 90;
  this.rotateCub(this.crrRotationDeg);
}
  
  rotateCub(rotation: number){
    
    // this.cub.style.transform = `rotateY(-${rotation}deg)`;
  }

  progressValue(index : number) : string{
    console.log("call..progresslevel")
    if (index === this.imgIndex) {
      this.progressCalculator();
      return "width:{{this.imgProgress}}%";
    }
    if (index < this.imgIndex) {
      return "width:100%";
    }
    else{
      return "width:0%";
    }
  }
  

  progressCalculator () : void {
    console.log("call..progesscalculator")
  this.startImgProgress = () => {
    clearInterval(this.imgInterval);

    this.imgInterval = setInterval(() => {
      this.imgProgress += 10 / 3;
      console.log("run")

      if (this.imgIndex === this.stories[this.storieIndex].images.length) {
        this.nextFace()
        return;
      }

      if (this.imgProgress > 100) {
        this.imgIndex++;
        this.imgProgress = 0;
        return;
      }

    }, 100);
  }
}

}
