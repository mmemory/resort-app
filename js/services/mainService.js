angular.module('resortApp')
.service('dataService', function() {

    var imageRoot = './assets/images/';

    var mountainItems = [
        {
            title: 'Deals',
            text: 'A list of the best deals in town. From entree deals to drink specials, you are sure to find something great.',
            image: imageRoot + 'mountain_deals.png',
            type: 'mountain'
        },
        {
            title: 'Restaurants',
            text: 'Our dining guide shows great restaurants around you. Easily find and make reservations at the best local spots.',
            image: imageRoot + 'mountain_restaurant.png',
            type: 'mountain'
        },
        {
            title: 'Maps',
            text: 'Our custom, interactive maps of ski resort towns allow you to navigate the area easily.',
            image: imageRoot + 'mountain_map.png',
            type: 'mountain'
        },
        {
            title: 'Events',
            text: 'Never miss out on an event again!.',
            image: imageRoot + 'mountain_events.png',
            type: 'mountain'
        },
        {
            title: 'Shopping',
            text: 'Our shopping guide shows the best shops in town for everything you may need.',
            image: imageRoot + 'mountain_shopping.png',
            type: 'mountain'
        },
        {
            title: 'Activities',
            text: 'Discover neat, family-friendly things to do around town when you\'re not on the slopes.',
            image: imageRoot + 'mountain_activities.png',
            type: 'mountain'
        },
        {
            title: 'Après-ski',
            text: 'Everyone loves a drink after a day on the slopes. Find the best bars around you.',
            image: imageRoot + 'mountain_bar.png',
            type: 'mountain'
        },
        {
            title: 'Maps',
            text: 'With real-time updates from all parking lots, you’re sure to find a parking spot when you need one.',
            image: imageRoot + 'mountain_parking.png',
            type: 'mountain'
        }
    ];

    var beachItems = [
        {
            title: 'Deals',
            text: 'A list of the best deals in town. From entree deals to drink specials, you are sure to find something great.',
            image: imageRoot + 'beach_deals.png',
            type: 'mountain'
        },
        {
            title: 'Restaurants',
            text: 'Our dining guide shows great restaurants around you. Easily find and make reservations at the best local spots.',
            image: imageRoot + 'beach_restaurant.png',
            type: 'mountain'
        },
        {
            title: 'Events',
            text: 'Never miss out on an event again!',
            image: imageRoot + 'beach_events.png',
            type: 'beach'
        },
        {
            title: 'Shopping',
            text: 'Our shopping guide shows the best shops in town for everything you may need.',
            image: imageRoot + 'beach_shopping.png',
            type: 'beach'
        },
        {
            title: 'Activities',
            text: 'Discover neat, family-friendly things to do around town when you\'re not at the beach.',
            image: imageRoot + 'beach_activities.png',
            type: 'beach'
        }
    ];

    this.getBeachItems = function() {
        return beachItems;
    };

    this.getMountainItems = function() {
        return mountainItems;
    }

});