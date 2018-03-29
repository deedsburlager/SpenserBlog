# SpenserBlog
View me @ https://deedsburlager.github.io/SpenserBlog/
For My Beautiful One
This is a project for Code Louisville, but really for my wife. 
For her blog posting pleasure!!

This Website was created from scratch for a Front-End Web Development Class. The site has a main landing page and 2 child pages. It includes a form with JavaScript to submit for a subscription to a newsletter. 

Some CSS Classes are....
1. Class name (.main_nav li) under the Selectors w/ class divider
I used this class in CSS to remove the bullets from the unordered list.

2. Class name (.primary) under the Selectors w/ class divider
I used this class in CSS to create a material feel by adding box shadow

3. Class name (.secondary) and (.teriary) are located under @mediaquery
These classes take use of the 'float' attribute. Here I was able to make the site responsive and create two columns at 769px and higher.

The JavaScript Functions is....

1. the navagation bar. 
```
function myFunction(){
    var x = document.getElementById("myNav");
    if (x.className === "main_nav"){
        x.className += "responsive";
    }else{
        x.className = "main_nav"
    }
}
```