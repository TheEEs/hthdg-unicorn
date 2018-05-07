# Sunicorn - A simple HTML slideshow library built with Vuejs.


> Thanks to [VueJs](https://vuejs.org) - a great JS Framework.

This library uses [Animate.css](https://github.com/daneden/animate.css) for slide's show and hide animation. So make sure that you had included this library into your HTML `<head>` tag.
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
```

Also remember to include Vuejs library and two **CSS** and **JS** in this repository into your `<head>`.
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.11/vue.min.js"></script>
<link rel="stylesheet" href="./v-slide.css" />
<script src="./v-slide.js"> </script>
```

To create a slide show. First you need to create an `v-unicorn` element, and don't forget to name it an id.
```html
<v-unicorn id='slide_show'>
    
</v-unicorn>
```
Inside this tag, creates some slide show tag - `v-slide`.

This tag is a **VueJS** component. It has some important attributes.

* background-url - Path to the slide background image.
* title - Title of the slide
* bg-color - Background-color of the slide
* bordered-title - Whether title is bordered by a white box.
* enter-animation - Animation occured when the slide is show.
* exit-animation - Animation ocurred when the slide is hidden.
* index - An integer indicates the order of the slide.

E.g
```html
<v-slide background-url='http://www.made-in-england.org/wp-content/uploads/2011/12/LoneStag.svg' bordered-title :index='1' bg-color='alizarin' title='Hi Dương' >
            </v-slide>

```

You can specify what is the starting slide by setting `start-page` attribute of `<v-unicorn>` element like below:
```html
<v-unicorn :start-page='1' id='slide_show'>
</v-unicorn>
```

Whenever you click on the page, your slideshow should turn to the next page.

> Thank you for visiting my repository, i hope this useful to you.
