handelsubmit()
{
    let inputdate=document.querySelector(".inputdate");
    let outputdate=document.querySelector(".outputdate");

    let formateddate = new Date(inputdate.value).toLocaleDateString(en-IN);
    outputdate.value=formateddate;
}