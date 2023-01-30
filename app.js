const $answer = $('.answer');
const $question = $('.question');
const $questionSection = $('.q-section');
const $arrow = $('.arrow');

$questionSection.click(function(){
    $(this).siblings().toggle('slide')
    $(this).children().toggleClass('active')
})