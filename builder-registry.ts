import { Builder } from '@builder.io/react'
import { HomeCompanyLocation } from "./app/home/components/HomeLocation";
import { Header } from './app/components/Header';
import { Footer } from './app/components/Footer';
import { HomePageArticle, Icons as HomePageArticleIcons } from './app/home/components/HomePageArticle';
import { Testimonial } from './app/home/components/Testimonial';


Builder.registerComponent(Header, {
  name: 'Header',
  inputs: [],
})
Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [],
})
Builder.registerComponent(HomeCompanyLocation, {
  name: 'Our new location',
  inputs: [],
})


Builder.registerComponent(HomePageArticle, {
  name: 'Why us - Option',
  inputs: [{ name: 'title', type: 'text' }, { name: 'content', type: 'richText' }, { name: 'Icon', type: 'text', enum: HomePageArticleIcons }],
})

Builder.registerComponent(Testimonial, {
  name: 'Testimonial',
  inputs: [{name: 'name', type: 'text'}, {name: 'content', type: 'text'}, {name: 'date', type: 'text'}],
})


