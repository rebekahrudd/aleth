
const term = document.querySelector('.term');
const checkButton = document.querySelector('.check')

checkButton.addEventListener('click', video_function);

function video_function() {

    console.log("You clicked the check button");
    

}

checkButton.addEventListener('click', addCode)

function addCode() {
    document.getElementById("card")
                .innerHTML +=
                `<section>
            <!-- these will need to be editable based on the study sets that they are creating -->
        <!-- from json english -->
        <section class = "item1">english place holder</section>
        <!-- from json pinyin -->
        <section class = "item2">pinyin place holder</section>
        <!-- from json character -->
        <section class = "item3">mandarin place holder</section>
        <!-- from json svgs path -->
        <section class = "item_svg"><img src="img/logo.jpg" alt="character name" width="150" height="150"></section>
        </section>`;
    console.log("you successfully added code")
}

