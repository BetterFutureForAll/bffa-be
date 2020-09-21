# bffa-be
Backend server for the BFFA React App.

Converting each years data from a CSV into a backend Database using MongoDB will allow much faster use of the data to for rendering front end.

The goal will be to convert the CSV values into a mongoose schema, so that data can be quickly accessed by the app through a variety of renders. 

The option of SQL vs NoSQL lead to a choice of MongoDB and Mongoose due to its speed with lots of reads and very few writes. All of the data will only need updating once a year, and this way a new year document can be added with less code changes in the future. As well as this will be a more viable option for quick reads and will reduce call times on the backend, and allow for the front end to be able to do the work of rendering graphical displays faster. 

This approach will require more diligence in schema designs and modeling, but will be more flexible and faster to serve large documents quickly to the front end. 

#### Cautions
 The temptation to store everything into one giant document may make the calls faster on the server but will make calls take more time to transfer the call to the front end due to the nature of the internet. 

## Notes 
Ideal data calls will follow 

``` year.country.<data>
    year.country.spiScore
    year.country.<spiCategory>.score
    year.country.<spiCategory>.<spiSubcategory>.score
```
We want to be able to pull a document with all the countries for a given year quickly. 
We must be able to quickly fetch ALL countries scores.

Subcategories could be referenced, as those will not be called as often. The most commonly retrieved documents will probably be by years comparing multiple countries. 

- Each Year will reference many countries.
- Each Country will reference a spiScore for that year.
- Each Country will reference a category with a score. Categories are [ Basic, Foundations, Opportunity ]
- Each Category will have a calculated spiScore specific to the Country, Year, and Category
- Each Category will have a subset of subcategories that each have a score.

