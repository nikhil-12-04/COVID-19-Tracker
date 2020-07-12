function onClickedOnToggler(){
    
    var isLight=document.getElementById('customSwitch1').checked;
// bg-light text-dark on link when active 
if(isLight==false){

    document.getElementById('body').setAttribute('class','bg-dark text-white')
    document.getElementById('header').setAttribute('class','container mx-auto text-center mt-2 text-white mb-5')
    document.getElementById('overall').setAttribute('class','nav-link text-white ')
    document.getElementById('by-country').setAttribute('class','nav-link text-white')
    if(document.getElementById('table')!=null)
        document.getElementById('table').setAttribute('class','table table-hover table-dark')
    if(document.getElementById('table1')!=null)
        document.getElementById('table1').setAttribute('class','table table-hover table-dark table-striped')
    if(document.getElementById('submit')!=null)
        document.getElementById('submit').setAttribute('class','btn btn-light text-dark')
    if(document.getElementById('country-card')!=null)
        document.getElementById('country-card').setAttribute('class','card bg-dark')
    document.getElementById('move').setAttribute('class','float-right text-white')

}
else{

    document.getElementById('body').setAttribute('class','bg-light text-dark ')
    document.getElementById('header').setAttribute('class','container mx-auto text-center mt-2 text-dark mb-5')
    document.getElementById('overall').setAttribute('class','nav-link text-dark ')
    document.getElementById('by-country').setAttribute('class','nav-link text-dark ')
    if(document.getElementById('table')!=null)
        document.getElementById('table').setAttribute('class','table table-hover table-light')
    if(document.getElementById('table1')!=null)
        document.getElementById('table1').setAttribute('class','table table-hover table-light table-striped')
    if(document.getElementById('submit')!=null)
        document.getElementById('submit').setAttribute('class','btn btn-dark text-light')
    if(document.getElementById('country-card')!=null)
        document.getElementById('country-card').setAttribute('class','card bg-light')
    document.getElementById('move').setAttribute('class','float-right text-dark')

}
}

const date=new Date()
document.getElementById('year').innerHTML= date.getFullYear()