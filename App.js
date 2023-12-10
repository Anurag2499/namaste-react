import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

/*
    Header
        -Logo
        -Nav Item
    Body
        -Search
        -RestaurentContainer
            RestaurentCards
                -image
                -
    Footer
        -Copyright
        -Links
        -Address
        -Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{'Rating:' + avgRating + ' stars'}</h4>
      <h4>{'Timing:' + sla.deliveryTime + ' Minutes'}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: '427774',
      name: 'Chaayos Chai+Snacks=Relax',
      cloudinaryImageId: 'cace805a6ba74137571d0f7ac92302b1',
      locality: 'Maan Road',
      areaName: 'Hinjawadi',
      costForTwo: '₹250 for two',
      cuisines: [
        'Bakery',
        'Beverages',
        'Chaat',
        'Desserts',
        'Home Food',
        'Italian',
        'Maharashtrian',
        'Snacks',
        'Street Food',
        'Sweets',
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '427774',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5000,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5000,
      },
      parentId: '281782',
      avgRatingString: '4.3',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 23:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-maan-road-hinjawadi-pune-427774',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '3417',
      name: 'Subway',
      cloudinaryImageId: '1ace5fa65eff3e1223feb696c956b38b',
      locality: 'Blue Ridge Township',
      areaName: 'Hinjawadi',
      costForTwo: '₹350 for two',
      cuisines: ['Healthy Food', 'Salads', 'Snacks', 'Desserts', 'Beverages'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '3417',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5000,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5000,
      },
      parentId: '2',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 5.9,
        serviceability: 'SERVICEABLE',
        slaString: '31 mins',
        lastMileTravelString: '5.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 23:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/subway-blue-ridge-township-hinjawadi-pune-3417',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '245348',
      name: 'Oye Kiddan',
      cloudinaryImageId: 'poymismten2l3pbit1ui',
      locality: 'Jambulkar Nagar',
      areaName: 'Hinjawadi',
      costForTwo: '₹250 for two',
      cuisines: ['North Indian', 'Punjabi', 'Thalis', 'Desserts'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '245348',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5800,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5800,
      },
      parentId: '690',
      avgRatingString: '4.0',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 6.6,
        serviceability: 'SERVICEABLE',
        slaString: '33 mins',
        lastMileTravelString: '6.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 16:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/oye-kiddan-jambulkar-nagar-hinjawadi-pune-245348',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '323673',
      name: 'WarmOven Cake & Desserts',
      cloudinaryImageId: 'e938fb5f416cc2c28b4b519cf27b04cc',
      locality: 'Bhujbal Wasti',
      areaName: 'Wakad',
      costForTwo: '₹200 for two',
      cuisines: ['Bakery', 'Desserts', 'Ice Cream', 'Beverages'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '323673',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 7400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 7400,
      },
      parentId: '9696',
      avgRatingString: '4.0',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 35,
        lastMileTravel: 8.5,
        serviceability: 'SERVICEABLE',
        slaString: '35 mins',
        lastMileTravelString: '8.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-09 05:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-bhujbal-wasti-wakad-pune-323673',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '496032',
      name: 'EatFit',
      cloudinaryImageId: '6126c9b45de2cb222405c1af8a321e74',
      locality: 'Wakd Road',
      areaName: 'Hinjawadi',
      costForTwo: '₹270 for two',
      cuisines: [
        'Chinese',
        'Healthy Food',
        'Tandoor',
        'Pizzas',
        'North Indian',
        'Thalis',
        'Biryani',
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '496032',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 6200,
      },
      parentId: '76139',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 7.7,
        serviceability: 'SERVICEABLE',
        slaString: '33 mins',
        lastMileTravelString: '7.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'brand',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'brand',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/eatfit-wakd-road-hinjawadi-pune-496032',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '41800',
      name: 'Faasos - Wraps & Rolls',
      cloudinaryImageId: 'af33b81798b11deba338e94b7585d348',
      locality: 'Maan Road Om plaza 2nd floor',
      areaName: 'Hinjawadi',
      costForTwo: '₹200 for two',
      cuisines: [
        'Kebabs',
        'Fast Food',
        'Snacks',
        'North Indian',
        'American',
        'Healthy Food',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '41800',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5000,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5000,
      },
      parentId: '21809',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5,
        serviceability: 'SERVICEABLE',
        slaString: '36 mins',
        lastMileTravelString: '5.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-maan-road-om-plaza-2nd-floor-hinjawadi-pune-41800',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '62984',
      name: 'LunchBox - Meals and Thalis',
      cloudinaryImageId: 'p6nyjevqkca8fpuarzgl',
      locality: 'Maan Road Om plaza 2nd floor',
      areaName: 'Hinjawadi',
      costForTwo: '₹200 for two',
      cuisines: [
        'Biryani',
        'North Indian',
        'Punjabi',
        'Healthy Food',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '62984',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4400,
      },
      parentId: '4925',
      avgRatingString: '4.1',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.6,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '4.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹159',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-maan-road-om-plaza-2nd-floor-hinjawadi-pune-62984',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '41804',
      name: 'Sweet Truth - Cake and Desserts',
      cloudinaryImageId: '4a3b48488e3aa9bda13efd8cfcd95284',
      locality: 'Maan Road Om plaza 2nd floor',
      areaName: 'Hinjawadi',
      costForTwo: '₹450 for two',
      cuisines: ['Snacks', 'Bakery', 'Desserts', 'Beverages'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '41804',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5100,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5100,
      },
      parentId: '4444',
      avgRatingString: '4.2',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.6,
        serviceability: 'SERVICEABLE',
        slaString: '25 mins',
        lastMileTravelString: '4.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 23:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-maan-road-om-plaza-2nd-floor-hinjawadi-pune-41804',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '396721',
      name: 'Chai Point',
      cloudinaryImageId: 'f9ekvewefxolboyrurxs',
      locality: 'Rahatani Road',
      areaName: 'Pimple Saudagar',
      costForTwo: '₹150 for two',
      cuisines: [
        'Bakery',
        'Beverages',
        'Maharashtrian',
        'Snacks',
        'Street Food',
        'South Indian',
        'Punjabi',
        'Chaat',
        'Indian',
        'American',
        'North Indian',
        'Fast Food',
        'Desserts',
        'Cafe',
        'Healthy Food',
        'Home Food',
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: '396721',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 11200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 11200,
      },
      parentId: '1607',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 48,
        lastMileTravel: 11.8,
        serviceability: 'SERVICEABLE',
        slaString: '48 mins',
        lastMileTravelString: '11.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-15 00:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/chai-point-rahatani-road-pimple-saudagar-pune-396721',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '253596',
      name: 'Burger King',
      cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
      locality: 'Tathawade',
      areaName: 'Tathawade',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '253596',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 7700,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 7700,
      },
      parentId: '166',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 48,
        lastMileTravel: 8.6,
        serviceability: 'SERVICEABLE',
        slaString: '48 mins',
        lastMileTravelString: '8.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-09 06:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/burger-king-tathawade-pune-253596',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '16970',
      name: 'Mad Momos',
      cloudinaryImageId: 'qswrojfwttgslmy8n4cn',
      locality: 'Guru Krupa Colony',
      areaName: 'Guru Krupa Colony',
      costForTwo: '₹200 for two',
      cuisines: [
        'Chinese',
        'Tibetan',
        'Nepalese',
        'Pizzas',
        'Snacks',
        'Beverages',
      ],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '16970',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 11400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 11400,
      },
      parentId: '610',
      avgRatingString: '3.8',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 46,
        lastMileTravel: 11.1,
        serviceability: 'SERVICEABLE',
        slaString: '46 mins',
        lastMileTravelString: '11.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 23:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/mad-momos-guru-krupa-colony-pune-16970',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '393858',
      name: 'Samosa Singh',
      cloudinaryImageId: '77baefd8a5e319c828b4d7dff7260644',
      locality: 'Wakad Road',
      areaName: 'Hinjawadi',
      costForTwo: '₹150 for two',
      cuisines: [
        'North Indian',
        'Snacks',
        'Desserts',
        'Beverages',
        'Street Food',
      ],
      avgRating: 3.8,
      veg: true,
      feeDetails: {
        restaurantId: '393858',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 6400,
      },
      parentId: '5639',
      avgRatingString: '3.8',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 45,
        lastMileTravel: 7.7,
        serviceability: 'SERVICEABLE',
        slaString: '45 mins',
        lastMileTravelString: '7.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 21:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/samosa-singh-wakad-road-hinjawadi-pune-393858',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '323664',
      name: 'Indiana Burgers',
      cloudinaryImageId: 'm2s6jxl0fjnpqcu0rpwj',
      locality: 'Bhujbal Wasti',
      areaName: 'Wakad',
      costForTwo: '₹150 for two',
      cuisines: ['Burgers', 'American', 'Fast Food', 'Beverages', 'Desserts'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '323664',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 7400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 7400,
      },
      parentId: '5714',
      avgRatingString: '3.8',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 43,
        lastMileTravel: 8.5,
        serviceability: 'SERVICEABLE',
        slaString: '43 mins',
        lastMileTravelString: '8.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-09 05:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/indiana-burgers-bhujbal-wasti-wakad-pune-323664',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '363836',
      name: 'Theobroma',
      cloudinaryImageId: 'b033728dcb0101ceb19bff0e1e1f6474',
      locality: 'Pimple Saudagar',
      areaName: 'Pimple Saudagar',
      costForTwo: '₹500 for two',
      cuisines: ['Bakery', 'Desserts'],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: '363836',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 12100,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 12100,
      },
      parentId: '1040',
      avgRatingString: '4.3',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 39,
        lastMileTravel: 11.4,
        serviceability: 'SERVICEABLE',
        slaString: '39 mins',
        lastMileTravelString: '11.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'newg.png',
            description: 'Gourmet',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Gourmet',
                  imageId: 'newg.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'ABOVE ₹159',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/theobroma-pimple-saudagar-pune-363836',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '323668',
      name: 'Kaati Zone Rolls & Wraps',
      cloudinaryImageId: 'reykt14ijxya20zbpiud',
      locality: 'Bhujbal Wasti',
      areaName: 'Wakad',
      costForTwo: '₹150 for two',
      cuisines: ['Fast Food', 'Bengali', 'Beverages', 'Desserts'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '323668',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 7400,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 7400,
      },
      parentId: '248306',
      avgRatingString: '3.8',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 39,
        lastMileTravel: 8.5,
        serviceability: 'SERVICEABLE',
        slaString: '39 mins',
        lastMileTravelString: '8.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-09 05:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹499',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-bhujbal-wasti-wakad-pune-323668',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '4872',
      name: 'Ghar Ka Khana - Since 2005',
      cloudinaryImageId: 'f7b365c641d99818f272b5490f034226',
      locality: 'Rajiv Gandhi Infotech Park',
      areaName: 'Hinjawadi',
      costForTwo: '₹400 for two',
      cuisines: ['North Indian', 'Punjabi', 'Thalis', 'Kebabs', 'Chinese'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '4872',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5200,
      },
      parentId: '472753',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5.5,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '5.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 15:55:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/ghar-ka-khana-since-2005-rajiv-gandhi-infotech-park-hinjawadi-pune-4872',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '298722',
      name: 'The Bombay Paratha Company',
      cloudinaryImageId: 'iphg47c6ejdjoqpvy8zi',
      locality: 'Jambulkar Nagar',
      areaName: 'Hinjawadi',
      costForTwo: '₹300 for two',
      cuisines: ['North Indian', 'Indian', 'Punjabi', 'Desserts', 'Beverages'],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: '298722',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 5800,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 5800,
      },
      parentId: '10827',
      avgRatingString: '3.7',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 38,
        lastMileTravel: 6.6,
        serviceability: 'SERVICEABLE',
        slaString: '38 mins',
        lastMileTravelString: '6.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 16:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-bombay-paratha-company-jambulkar-nagar-hinjawadi-pune-298722',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '372386',
      name: 'The Brooklyn Creamery - Healthy Ice Cream',
      cloudinaryImageId: 'b1b35780a9b1dfeb26d680506d494eaa',
      locality: 'Times Square',
      areaName: 'Hinjawadi',
      costForTwo: '₹200 for two',
      cuisines: ['Desserts', 'Ice Cream', 'Healthy Food'],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: '372386',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 6300,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 6300,
      },
      parentId: '236673',
      avgRatingString: '4.4',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 6.9,
        serviceability: 'SERVICEABLE',
        slaString: '31 mins',
        lastMileTravelString: '6.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-08 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'brand',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'brand',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-times-square-hinjawadi-pune-372386',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '35790',
      name: 'The Belgian Waffle Co.',
      cloudinaryImageId: '5116a385bac0548e06c33c08350fbf11',
      locality: 'Balewadi High Street',
      areaName: 'Balewadi',
      costForTwo: '₹200 for two',
      cuisines: ['Waffle', 'Desserts', 'Ice Cream', 'Beverages'],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: '35790',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 12200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 12200,
      },
      parentId: '2233',
      avgRatingString: '4.4',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 56,
        lastMileTravel: 12.1,
        serviceability: 'SERVICEABLE',
        slaString: '56 mins',
        lastMileTravelString: '12.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-09 06:55:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/the-belgian-waffle-co-high-street-balewadi-pune-35790',
      type: 'WEBLINK',
    },
  },
  {
    info: {
      id: '27249',
      name: 'Baskin Robbins - Ice Cream Desserts',
      cloudinaryImageId: '85ccae4e3576f9330af102c46ca85395',
      locality: 'Opposite Copa Cabana Hotel',
      areaName: 'Pimple Nilakh',
      costForTwo: '₹200 for two',
      cuisines: ['Ice Cream', 'Desserts'],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: '27249',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 10600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 10600,
      },
      parentId: '5588',
      avgRatingString: '4.5',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 38,
        lastMileTravel: 10.8,
        serviceability: 'SERVICEABLE',
        slaString: '38 mins',
        lastMileTravelString: '10.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-12-15 00:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '10% OFF',
        subHeader: 'ABOVE ₹1000',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-opposite-copa-cabana-hotel-pimple-nilakh-pune-27249',
      type: 'WEBLINK',
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading);
root.render(<Applayout />);
