class Review {

    constructor(name, job, review, img){
        this.name = name;
        this.job = job;
        this.review = review;
        this.img = img;
    }

    getName(){
        return this.name;
    }
    
    getJob(){
        return this.job;
    }

    getImg(){
        return this.img;
    }

    getReview(){
        return this.review;
    }

}

const Reviews = [new Review("Robin Banks", "Professional Baddy", "Gone are the days of biting off slice-sized chunks of banana and spitting them onto a serving tray. At long last, there is a saliva-free way of slicing bananas. Thank you, Hutzler! Next on my wish list: a kitchen tool for dividing frozen water into cube-sized chunks. ", "reviewCarasol_Images\\im1.jpg"), 
new Review("Sam Sung", "Electrical Engineer", "Unfortunately, I already had this exact picture tattooed on my chest, but this shirt is very useful in colder weather.","reviewCarasol_Images\\im2.jpg" ),
new Review("Cris P. Bacon", "Chef", "At first I wasn’t sure if spending money on a sticker of an old lady with an inhaler was a good idea but once I got it I knew I had made the right choice. She keeps me company in my apartment since I don’t have any actual friends, we eat, play board games, and watch TV together. We have so much in common like our love for breathing and other things. She doesn’t argue like real people do and unlike a girlfriend, I don’t have to take her on dates, worry about keeping her happy, and she doesn’t nag me for money. Overall I am 100 percent satisfied with my purchase.", "reviewCarasol_Images\\im3.jpg"),
new Review("Kash Register", "Accountant", "It is day 87 and the horses have accepted me as one of their own. I have grown to understand and respect their gentle ways. Now I question everything I thought I once knew and fear I am no longer capable of following through with my primary objective. I know that those who sent me will not relent. They will send others in my place… But we will be ready.", "reviewCarasol_Images\\im4.jpg")
];

let pointer = 0;


let pfp_img = document.getElementsByTagName("Img")[0];
let pfp_name = document.getElementById("review_name");
let pfp_job = document.getElementById("review_job");
let pfp_review = document.getElementById("review");
let left = document.getElementById("left");
let right = document.getElementById("right");
let surprise = document.getElementById("surprise");

pfp_img.src = Reviews[pointer].getImg();
pfp_name.innerHTML = Reviews[pointer].getName();
pfp_job.innerHTML = Reviews[pointer].getJob();
pfp_review.innerHTML = Reviews[pointer].getReview();


function generate_random_profile(){
    let ran = Math.floor(Math.random() * Reviews.length);
    return Reviews[ran];
}

function update_visuals(profile){
    pfp_img.src = profile.getImg();
    pfp_name.innerHTML = profile.getName();
    pfp_job.innerHTML = profile.getJob();
    pfp_review.innerHTML = profile.getReview();
}

function left_button(){
    if (pointer == 0){
        pointer = Reviews.length - 1;
    }
    else{
        pointer --;
    }
    return Reviews[pointer];
}

function right_button(){
    if (pointer == Reviews.length - 1){
        pointer = 0;
    }
    else{
        pointer ++;
    }
    return Reviews[pointer];
}

left.addEventListener("click", (event)=>{
    update_visuals(left_button())
});

right.addEventListener("click", (event)=>{
    update_visuals(right_button())
});

surprise.addEventListener("click", (event)=>{
    update_visuals(generate_random_profile())
});
