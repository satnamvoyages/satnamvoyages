<?php
/**
 * Satnam Voyages - Tours & Outstation Fleet Data in Core PHP
 */

$TOURS = [
    [
        'id' => 'golden-triangle-express',
        'title' => 'Golden Triangle Tour — Delhi • Agra • Jaipur',
        'duration' => '4 Days / 3 Nights',
        'badge' => 'Most Popular',
        'price_inr' => 14500,
        'price_usd' => 175,
        'image' => 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
        'description' => 'Experience the iconic Taj Mahal at sunrise, Amber Fort, Red Fort, and royal bazaars of Jaipur with an experienced private chauffeur.',
        'highlights' => ['Private AC Toyota Innova / Sedan', 'Sunrise Taj Mahal entry guidance', 'Elephant/Jeep ride at Amber Fort', 'All toll taxes, parking & fuel included']
    ],
    [
        'id' => 'rajasthan-royal-heritage',
        'title' => 'Royal Rajasthan Heritage Circuit',
        'duration' => '8 Days / 7 Nights',
        'badge' => 'Heritage Choice',
        'price_inr' => 38000,
        'price_usd' => 455,
        'image' => 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
        'description' => 'Jaipur, Jodhpur Blue City, Udaipur Lake Palace, and Thar Desert dunes of Jaisalmer with verified heritage stays.',
        'highlights' => ['Sam Sand Dunes camel safari', 'Lake Pichola sunset boat ride', 'Mehrangarh & City Palace tours', 'Dedicated English/Hindi chauffeur']
    ],
    [
        'id' => 'himachal-manali-shimla',
        'title' => 'Himachal Mountain Escape — Shimla & Manali',
        'duration' => '6 Days / 5 Nights',
        'badge' => 'Scenic Adventure',
        'price_inr' => 24500,
        'price_usd' => 295,
        'image' => 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80',
        'description' => 'Drive through pine forests of Shimla, Solang Valley adventure sports, Atal Tunnel, and Old Manali riverside cafes.',
        'highlights' => ['Experienced mountain driver', 'Solang Valley & Atal Tunnel route', 'Mall Road & Jakhu Temple', 'Chilled climate & snow point visits']
    ],
    [
        'id' => 'uttarakhand-rishikesh-haridwar',
        'title' => 'Spiritual Ganga & Corbett Wildlife Tour',
        'duration' => '5 Days / 4 Nights',
        'badge' => 'Nature & Spiritual',
        'price_inr' => 19000,
        'price_usd' => 230,
        'image' => 'https://images.unsplash.com/photo-1600100397608-f010f443b74b?auto=format&fit=crop&w=800&q=80',
        'description' => 'Evening Ganga Aarti at Har Ki Pauri, Rishikesh river rafting, yoga ashrams, and thrilling Bengal Tiger jeep safaris in Jim Corbett.',
        'highlights' => ['VIP Ganga Aarti seating guidance', 'Jim Corbett National Park Jeep Safari', 'River rafting in Shivpuri', 'Bespoke riverside resort stays']
    ]
];

$FLEET = [
    [
        'name' => 'Toyota Innova Crysta',
        'type' => 'Premium SUV (6+1 Seater)',
        'rate' => '₹18 / km',
        'features' => ['Plush captain seats', 'Dual AC with individual vents', 'Spacious boot space for 4-5 large bags', 'Bottle chiller & charging ports'],
        'ideal_for' => 'Family Golden Triangle & Outstation multi-day tours'
    ],
    [
        'name' => 'Maruti Suzuki Dzire / Etios',
        'type' => 'Executive Sedan (4+1 Seater)',
        'rate' => '₹12 / km',
        'features' => ['High fuel efficiency', 'Clean sanitized cabin', 'Comfortable legroom for 3-4 passengers', 'Smooth city & expressway drive'],
        'ideal_for' => 'Couples & Same-day Delhi-Agra or airport transfers'
    ],
    [
        'name' => '12-Seater Maharaja Tempo Traveller',
        'type' => 'Luxury Mini Van (12+1 Seater)',
        'rate' => '₹26 / km',
        'features' => ['1x1 luxury recliner pushback seats', 'Individual reading lamps & AC louvers', 'LED TV with surround audio', 'Panoramic windows with curtains'],
        'ideal_for' => 'Group excursions, corporate delegations & wedding groups'
    ]
];
