Company Name:
Swine

Company Description:
We are a company that makes luxury minivans with an emphasis on form over function. Our target audience is people with a lower-class income. We want to convey a sense of eagerness, while at the same time being modern.

Job Description:
You must create a website that will mainly provide customer support for the company. The goal is to increase sales. Besides the landing page, the website will need a about page, product pages and a blog. The landing page should have a Our Values section. There should be a call to action to get users to subscribe to the newsletter. They would prefer a colorful design, and would like you to use the brand color, which is red. Take into account the client's preferences and values.

Deadline:
10 days

### V1

#### Initial setup
* Add pages & setup routes

#### Basic styling
* Create partials
* Add skeleton templates

#### Products page
* Add ejs logic
* Modify route
* Add seed data

#### Blog page
* Add ejs logic
* Modify route
* Add seed data

#### New Blog
* Add new blog form page
* Add route for above
* Add POST route

#### New Product
* Add form page
* Add page route
* Add POST route

### V1.1

#### Add Mongoose
* Install & configure Mongoose
* Set blog model
* Set product model

#### Refactor
* Move schemas to own files
* Move routes to own files
* Update app.js to redirect

#### SeedDB
* Write seeds.js to auto populate db
* Call in app.js

### V1.2

#### Navbar
* Implement color pallette
* Change fonts
* Style navbar, including hover states

#### Landing page styling 1
* Put in container
* Basic section splitting
* Style odd/even sections
* Add filler content

#### Signup CTA
* Contain CTA in each section
* Style to pop out
* Put form template on page footer

#### Header section
* Background as picture
* Add pseudo element to create diagonal shape

#### Signup Form
* Style spacing & font sizing
* Add post routing

#### Landing page styling 2
* Tweak section widths
* Draft clip-path for header section
* Minor style changes
* Add slanted edge to all sections

#### About page
* Add skeleton frame with filler content
* Add styling

#### Product page
* Add container
* Add classes to listings
* Style listings, including alternate layouts
* Add zoom transition to images

#### Blog page
* Add container
* Add classes to entries
* Shorten blog texts

#### Show Blog
* Add show individual blog route
* Add page
* Add page container, skeleton frame

### V2
I realised I was essentially trying to replicate bootstrap with my own CSS,
So a migration to actual bootstrap made a lot more sense.

#### Bootstrap redesign
* Add to partials
* Change to new stylesheet

#### Landing Page
* Add bootstrap classes
* Add customisation via new CSS

#### About Page
* Add Boostrap classes
* Add customisation via new CSS

#### Product Page
* Add Boostrap classes
* Add customisation via new CSS

#### Blog Pages
* Add Boostrap classes
* Add customisation via new CSS

### V2.1

#### Responsive Design
* Add breakpoint style change for display text
* Add navbar-collapse button
* Other breakpoint styling as needed

#### Footer
* Add links to footer
* Expand & format as needed
* Move signup form to footer
* Take `</main>` out of all views & put in footer

#### New Pages
* Add bootstrap to NEW routes

### V2.2

#### Product Features
* Add checkbox template to new form
* Pass values through body-parser
* Change seeds
* Render on show page

### V2.3

#### Support Section
* Add routes for multiple support pages
* Set up skeleton pages
* Add links to navbar via dropdown

#### Add Font-Awesome
* Link in header
* Add icons where needed

#### Style tweaks
* Add gradients to sections
* Adjust padding on sections for better spacing

#### Blog Date created
* Add date to blog schema with default
* Include in seeds
* Add to NEW route