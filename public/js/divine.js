/*根据后台返回的cardSum值，给第一个ul的li添加active样式*/
var cardSumUl = document.getElementById("cardSumUl"),
    cardSumLis = cardSumUl.getElementsByTagName("li"),
    cardSum = cardSumUl.dataset.cardsum ||cardSumUl.dataset.cardSum,
    activeCardSumLi=null;
switch (cardSum){
    case 'all':
        activeCardSumLi=cardSumLis[0];
        break;
    case '1':
        activeCardSumLi=cardSumLis[1];
        break;
    case '2':
        activeCardSumLi=cardSumLis[2];
        break;
    case '3':
        activeCardSumLi=cardSumLis[3];
        break;
    case '4~10':
        activeCardSumLi=cardSumLis[4];
        break;
    case '11~':
        activeCardSumLi=cardSumLis[5];
        break;
    default:
        activeCardSumLi=cardSumLis[0];
};
activeCardSumLi.className="active";

/*根据选择张数不同，重新给类别指定递交地址*/

