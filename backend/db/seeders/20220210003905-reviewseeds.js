'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [
      {
        listingId: 1,
        userId: 1,
        rating: 4,
        review: 'The location is perfect, directly across the street from 4 O’clock run, with a convenient crosswalk to get right to your room. Bus stops on both sides of the street making peaks 7,8,9 and the base of the gondola easily accessible. An east walk to Main Street to see a large number of the shops and restaurants that Breck has to offer. The covered parking was easy to get in and out of. With two elevators in the parking garage to get up to your room quickly. Very attentive front staff who are always ready to check your skis/boards so you don’t have to carry them up to your room. There is a hot tub on-site, which is perfect for easing those tired muscles after a day on the slopes, or just kicking back after a full day of shopping. Great bar in the lobby with a very friendly bar staff, and a tiki bar/restaurant in the basement that offers free delivery to guests. Not the most luxurious place in Breckenridge, but the value and convenience far outweighs the price of your stay. We will definitely make Vacasa/River Mountain Lodge our first choice for Lodging in Breckenridge in the future.',
      },
      {
        listingId: 1,
        userId: 3,
        rating: 2,
        review: 'Ashely with Vacasa was incredibly helpful and friendly. The location was perfect - great spot relative to town and to the Gondola. Only downfall was that there was no view, but everything else was fantastic. Loved the lobby being right there - we played checkers (which they had available) late at night.',
      },
      {
        listingId: 1,
        userId: 4,
        rating: 5,
        review: 'There are not enough stars to give the unit as for its location. Free bus stops to Breck Station, peaks 7;8;and 9 on BOTH sides of the street. Four O Clock run allows you to ski right to the bus stop across the street. from Peak 8 if you choose to. Onsite ski storage is a very nice perk to not have to bring skis and find space in the unit for them. The Murphy bed was excellent, we did not use the sleeper sofa so I cannot comment on that. Apparently the owners efforts have corrected that problem mentioned in previous reviews. Outside noise might be a problem if one is picky about such things. The unit is where it is, next to street and the bar. It didnt bother my sleep, but I ski pretty hard, and am pretty much asleep midway thru the 9:00 news. Overall I would have stayed there another week, or whole season, if I could afford to.',
      },
      {
        listingId: 1,
        userId: 5,
        rating: 5,
        review: 'We had a great stay! The unit is really nice, has everything you need. The whole process went very smoothly and it is a great location!',
      },
      {
        listingId: 3,
        userId: 1,
        rating: 5,
        review: 'The house and location were AMAZING! If you are looking for a quiet and peaceful retreat, this is it! It was even more beautiful in person. There were more amenities than mentioned on the listing, like games and beach supplies. The beds were also very comfortable and all of them have an ocean view. You cannot beat that view and the sounds of the waves. We were also very lucky and saw dolphins from the deck! I would definately recommend this house and will be coming back in the future.',
      },
      {
        listingId: 2,
        userId: 3,
        rating: 2,
        review: 'Excellent location right off of the water. We have stayed in this house twice and will be back again. Excellent location and very private. Walking distance to the public beach/nature preserve.',
      },
      {
        listingId: 2,
        userId: 4,
        rating: 3,
        review: 'This is a great spot! Vacationed with our 3 kids and nothing beats having your own private beach. Our kids just ran down the steps and had fun all day long in the water. The house is not as nice as the pictures present, but accommodates your basic needs. The island is QUIET! Not a whole lot to do. The restaurants were spotty with service, many were still reeling from the covid shutdown. We wanted the quiet, away from the masses, kind of a trip and this was it! Loved the beach!!!',
      },
      {
        listingId: 15,
        userId: 5,
        rating: 2,
        review: 'we just got home from a short vacation to Dauphin Island. if you love the sound of crashing waves and picking up sea shells this is your place. Its almost at the end of the road and had plenty of beach space and really close to uninhabited beaches. House was clean and had everything we needed for the trip. The bed in the master bedroom was very comfortable memory foam mattress. if we get the opportunity to return we want to stay at the same place. A+',
      },
      {
        listingId: 7,
        userId: 5,
        rating: 2,
        review: 'we just got home from a short vacation to Dauphin Island. if you love the sound of crashing waves and picking up sea shells this is your place. Its almost at the end of the road and had plenty of beach space and really close to uninhabited beaches. House was clean and had everything we needed for the trip. The bed in the master bedroom was very comfortable memory foam mattress. if we get the opportunity to return we want to stay at the same place. A+',
      },
      {
        listingId: 10,
        userId: 4,
        rating: 2,
        review: 'we just got home from a short vacation to Dauphin Island. if you love the sound of crashing waves and picking up sea shells this is your place. Its almost at the end of the road and had plenty of beach space and really close to uninhabited beaches. House was clean and had everything we needed for the trip. The bed in the master bedroom was very comfortable memory foam mattress. if we get the opportunity to return we want to stay at the same place. A+',
      },

      {
        listingId: 12,
        userId: 2,
        rating: 2,
        review: 'we just got home from a short vacation to Dauphin Island. if you love the sound of crashing waves and picking up sea shells this is your place. Its almost at the end of the road and had plenty of beach space and really close to uninhabited beaches. House was clean and had everything we needed for the trip. The bed in the master bedroom was very comfortable memory foam mattress. if we get the opportunity to return we want to stay at the same place. A+',
      },


      {
        listingId: 11,
        userId: 5,
        rating: 4,
        review: 'we just got home from a short vacation to Dauphin Island. if you love the sound of crashing waves and picking up sea sUnusual Architecture, above average experience. The environment is fantastic, be ready to climb the steps. It is serious. The access road needs a 4WD vehicle.hells this is your place. Its almost at the end of the road and had plenty of beach space and really close to uninhabited beaches. House was clean and had everything we needed for the trip. The bed in the master bedroom was very comfortable memory foam mattress. if we get the opportunity to return we want to stay at the same place. A+',
      },
      {
        listingId: 4,
        userId: 5,
        rating: 2,
        review: 'It was a perfect getaway for a sunny December weekend. We enjoyed the peace and quiet offered by this one-of-a-kind house. Loved the sunset/sunrise views and the stars at night. We downloaded a couple movies beforehand and watched them when it got dark (esp bc it gets dark so earlier in December!).',
      },

      {
        listingId: 4,
        userId: 2,
        rating: 2,
        review: 'Really great views from all levels and super cool experience for a short getaway. The Red River Gorge Ziplining and Gorge Underground Kayaking were some great activities nearby!',
      },
      {
        listingId: 4,
        userId: 1,
        rating: 4,
        review: 'Amazing view, Dolphins, stingrays, crabs etc. Loved the front porch. Nice house. Great location. Definitely would stay here again.',
      },

      {
        listingId: 5,
        userId: 1,
        rating: 5,
        review: 'LOOK NO FURTHER!!! This house is a grand slam and makes sure you will have the best beach trip. Located literally in the water, everything is a step away: the deck, the beach, the gorgeous secluded West End. House is perfectly set up to accommodate large groups and is fully equipped (kitchen supplies, bathroom, grill, etc.). Can\'t recommend higher.',
      },
      {
        listingId: 5,
        userId: 4,
        rating: 4,
        review: 'I can still hear the sound of the crashing waves! ♥️ This house is so perfectly located ON the gulf. It has beach access & the most spectacular view and it faces south so youll be graced with both sunrise & sunset!! Most days you could see the dolphins in the distance playing in the water.The house itself is quite comfortable, comfy couches, comfy firm bed.While you will be totally wowed by the location, you won\'t be overwhelmed by the inclusions. Only the basics are included. This did not detract from the joy we felt during our stay at all. We will be back, God willing!!!',
      },

      {
        listingId: 5,
        userId: 2,
        rating: 5,
        review: 'we just got home from a short vacation to Dauphin Island. if you love the sound of crashing waves and picking up sea shells this is your place. Its almost at the end of the road and had plenty of beach space and really close to uninhabited beaches. House was clean and had everything we needed for the trip. The bed in the master bedroom was very comfortable memory foam mattress. if we get the opportunity to return we want to stay at the same place. A+',
      },
      {
        listingId: 5,
        userId: 5,
        rating: 2,
        review: 'This stay was absolutely incredible. Alisa is an absolute charmer and is wonderfully skilled at holding fun conversations and is a very thoughtful host. There were many little touches, such as coconut oil in the room and colloidal silver for travel ailments. I highly recommend purchasing meals through them as well! They are delicious and Alisa and fam really care about the quality of their food. We had an incredibly healing, restorative time here!',
      },
      {
        listingId: 9,
        userId: 4,
        rating: 2,
        review: 'Alisa and Richard were very engaging hosts. We had a lot of good conversations over a spectacular dinner, made by Alisa. It was a joy to spend time with them and their three children.',
      },
      {
        listingId: 9,
        userId: 3,
        rating: 2,
        review: 'Very beautiful loving environment. Learned so much about living off grid and how it can be non stressful. Food is delicious and very nutritional definitely enjoy the wonderful home made bread. Everything was delicious. The stay was wonderful for us. Anyone who likes to tent camp, backpack get off the path will love staying here.',
      },
      {
        listingId: 9,
        userId: 2,
        rating: 2,
        review: 'The house has gorgeous views and everything you need to have a wonderful Boulder vacation We were six adults and we spent most of our time on the deck when were not in downtown Boulder. The kitchen is well stocked if you want to cook.',
      },
      {
        listingId: 9,
        userId: 1,
        rating: 2,
        review: 'We had a wonderful time here. The owners friend showed us around, gave us some great hiking suggestions, and checked in on us via text. We felt very welcomed. The house itself is absolutely beautiful, and the porch with tan incredible view was my favorite part of the house. The hammock overlooking the mountains was the perfect touch.',
      },
    ], {});


  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
