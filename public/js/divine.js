/*根据后台返回的cardSum值，给第一个ul(张数的ul)的li添加active样式*/
var cardSumUl = document.getElementById("cardSumUl"),
    cardSumLis = cardSumUl.getElementsByTagName("li"),
    cardSum = cardSumUl.dataset.cardsum,
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

/*根据后台返回的expertIn值，给第二个ul(擅长的ul)的li添加active样式*/
var expertInUl = document.getElementById("expertInUl"),
    expertInLis = expertInUl.getElementsByTagName("li"),
    expertIn = expertInUl.dataset.expertin,
    activeExpertInLi=null;
switch (expertIn){
    case 'all':
        activeExpertInLi=expertInLis[0];
        break;
    case '通用':
        activeExpertInLi=expertInLis[1];
        break;
    case '爱情':
        activeExpertInLi=expertInLis[2];
        break;
    case '学业':
        activeExpertInLi=expertInLis[3];
        break;
    case '友谊':
        activeExpertInLi=expertInLis[4];
        break;
    case '事业':
        activeExpertInLi=expertInLis[5];
        break;
    case '财运':
        activeExpertInLi=expertInLis[6];
        break;
    default:
        activeExpertInLi=expertInLis[0];
};
activeExpertInLi.className="active";

