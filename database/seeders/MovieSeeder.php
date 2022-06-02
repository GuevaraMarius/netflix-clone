<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       Movie::create(['id' => 1, "category" => 'popular', "title" => "Stranger Things","rating"=>"95",
              "description"=>"The first season of the American science fiction horror drama television series Stranger Things premiered worldwide exclusively via Netflix's streaming service.",
              "image" => "https://res.cloudinary.com/guevara/image/upload/v1654083660/my%20pic/stranger_lmijzp.jpg",
              "year" =>"2016","tag"=>"Winona Ryder harbour, Mathew Modine TV Shows, Tv Sci-fi , Teen TV Shows" 
    ]);
    Movie::create(['id' => 2, "category" => 'popular', "title" => "Okja","rating"=>"87",
    "description"=>"For 10 idyllic years, young Mija has been caretaker and constant companion to Okja - a massive animal and an even bigger friend - at her home in the mountains of South Korea",
    "image" => "https://res.cloudinary.com/guevara/image/upload/v1654092439/my%20pic/maxresdefault_yaiez1.jpg",
    "year" =>"2017","tag"=>"Bong Joon-ho, Ted Sarandos, Dooho Choi, Jeremy Kleiner, Dede Gardner, Woo-sik Seo, Lewis Taewan Kim" 
]);
Movie::create(['id' => 3, "category" => 'popular', "title" => "The Crown","rating"=>"94",
"description"=>"Based on an award-winning play ('The Audience') by showrunner Peter Morgan, this lavish, Netflix-original drama chronicles the life of Queen Elizabeth II from the 1940s to modern times.",
"image" => "https://res.cloudinary.com/guevara/image/upload/v1654094076/my%20pic/TTV-SELECTS-NETFLIX-THE-CROWN-SEASON-2-570x321_e6ub85.jpg",
"year" =>"2020","tag"=>"Golden Globe Award for Best Television Series  Drama" 
]);
Movie::create(['id' => 4, "category" => 'popular', "title" => "The Crown","rating"=>"89",
"description"=>"Frank Underwood is a Democrat appointed as the secretary of state. Along with his wife, he sets out on a quest to seek revenge on the people who betrayed him while successfully rising to supremacy.",
"image" => "https://res.cloudinary.com/guevara/image/upload/v1654094113/my%20pic/House_of_Cards_main_characters_wbaro5.jpg",
"year" =>"2020","tag"=>" MRC; Trigger Street Productions; Wade/Thomas" 
]);
Movie::create(['id' => 5, "category" => 'popular', "title" => "Okja","rating"=>"87",
"description"=>"For 10 idyllic years, young Mija has been caretaker and constant companion to Okja - a massive animal and an even bigger friend - at her home in the mountains of South Korea",
"image" => "https://res.cloudinary.com/guevara/image/upload/v1654092439/my%20pic/maxresdefault_yaiez1.jpg",
"year" =>"2017","tag"=>"Bong Joon-ho, Ted Sarandos, Dooho Choi, Jeremy Kleiner, Dede Gardner, Woo-sik Seo, Lewis Taewan Kim" 
]);
Movie::create(['id' => 6, "category" => 'popular', "title" => "The Crown","rating"=>"89",
"description"=>"Frank Underwood is a Democrat appointed as the secretary of state. Along with his wife, he sets out on a quest to seek revenge on the people who betrayed him while successfully rising to supremacy.",
"image" => "https://res.cloudinary.com/guevara/image/upload/v1654094113/my%20pic/House_of_Cards_main_characters_wbaro5.jpg",
"year" =>"2020","tag"=>" MRC; Trigger Street Productions; Wade/Thomas" 
]);
    }
}
