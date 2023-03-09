const movieData = [
  {
    id: 1,
    city: "NCR",
    halls: [
      {
        name: "Fun Cinemas: PM Cinemas, Parsvnath Mall, Manhattan",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        arrangement:{rows:"ABCDEFGHIJ",cols:16},
        seats: [],
      },
      {
        name: "INOX: Crown Interiorz Mall, Delhi Mathura Road",
        timings: [
          { tm: "10:00AM", sbooked: [] },
          { tm: "2:00PM", sbooked: [] },
          { tm: "4:45PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "11:45PM", sbooked: [] },
        ],
        liked: false,
        arrangement:{rows:"ABCDEFGHIJKLM",cols:18},
      },
      {
        name: "INOX: EF3 Mall, Faridabad",
        timings: [
          { tm: "1:15PM", sbooked: [] },
          { tm: "2:45PM", sbooked: [] },
          { tm: "3:05PM", sbooked: [] },
          { tm: "7:00PM", sbooked: [] },
          { tm: "9:50PM", sbooked: [] },
        ],
        liked: true,
        arrangement:{rows:"ABCDEFGHIJKL",cols:9},
      },
    ],
    shows: [
      {
        title: "Selfiee",
        genre: ["Action", "Comedy", "Drama"],
        duration: "2:25",
        lang: ["Hindi"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICA4LjVLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00321341-evfjsswcqr-portrait.jpg",
      },
      {
        title: "Quantumania",
        genre: ["Action", "Adventure", "Comedy", "Sci-Fi"],
        duration: "2:10",
        lang: ["English"],
        format: ["2D", "3D", "4DX"],
        imgurl:
          "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg",
      },
      {
        title: "Pathan",
        genre: ["Action", "Adventure"],
        duration: "2:45",
        lang: ["Hindi"],
        format: ["2D", "3D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4yLzEwICAzNDMuMksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323848-eqpgjsbaxu-portrait.jpg",
      },
    ],
  },
  {
    id: 2,
    city: "Ahmedabad",
    halls: [
      {
        name: "1, Newfangled Miniplex: Mondeal Retail Park",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        arrangement:{rows:"ABCDEFGHIJKLMNO",cols:13},
        seats: [],
      },
      {
        name: "19 Cinema: South Bopal, Ahmedabad",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        seats: [],
        arrangement:{rows:"ABCDEFGHIJ",cols:20},
      },
    ],
    shows: [
      {
        title: "Selfiee",
        genre: ["Action", "Comedy", "Drama"],
        duration: "2:25",
        lang: ["Hindi"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICA4LjVLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00321341-evfjsswcqr-portrait.jpg",
      },
      {
        title: "Chal Man Jeetva Jaiye2",

        genre: ["Drama"],
        duration: "2:39",
        lang: ["Gujrati"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICAxLjFLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00352519-brsfeqrxjd-portrait.jpg",
      },
      {
        title: "Pathan",
        genre: ["Action", "Adventure"],
        duration: "2:45",
        lang: ["Hindi"],
        format: ["2D", "3D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4yLzEwICAzNDMuMksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323848-eqpgjsbaxu-portrait.jpg",
      },
      {
        title: "Vash",

        genre: ["Thriller"],
        duration: "1:57",
        lang: ["Gujrati"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4zLzEwICAyLjlLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00350569-rpjbdryjqg-portrait.jpg",
      },
    ],
  },
  {
    id: 3,
    city: "Bengaluru",
    halls: [
      {
        name: "Abhinay Theatre 4K A/C: Gandhinagar",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        arrangement:{rows:"ABCDEFGHIJKLMNO",cols:18},
        seats: [],
      },
      {
        name: "Cauvery Digital 4k Cinema: Sankey Road",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        seats: [],
        arrangement:{rows:"ABCDEFGHIJ",cols:20},
      },
      {
        name: "Cinephile HSR Layout: PNR Felicity Mall Haralur Rd",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        seats: [],
        arrangement:{rows:"ABCDEFGHI",cols:11},
      },
    ],
    shows: [
      {
        title: "Selfiee",
        genre: ["Action", "Comedy", "Drama"],
        duration: "2:25",
        lang: ["Hindi"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICA4LjVLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00321341-evfjsswcqr-portrait.jpg",
      },
      {
        title: "Quantumania",
        genre: ["Action", "Adventure", "Comedy", "Sci-Fi"],
        duration: "2:10",
        lang: ["Hindi", "English"],
        format: ["2D", "3D", "4DX"],
        imgurl:
          "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg",
      },
      {
        title: "Gowli",
        genre: ["Action", "Drama"],
        duration: "2:45",
        lang: ["Kannada"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS42LzEwICAxNTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00352610-wavtkdaqbf-portrait.jpg",
      },
      {
        title: "Sir",

        genre: ["Action", "Drama"],
        duration: "2:45",
        lang: ["Telugu"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICAyNy40SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00340527-nytnhqmleg-portrait.jpg",
      },
    ],
  },
  {
    id: 4,
    city: "Mumbai",
    halls: [
      {
        name: "Carnival: Moviestar, Goregaon",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        seats: [],
        arrangement:{rows:"ABCDEFGH",cols:14},
      },
      {
        name: "Cinepolis: Fun Republic Mall, Andheri (W)",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        seats: [],
        arrangement:{rows:"ABCDEFGHIJKL",cols:16},
      },
      {
        name: "G7 Multiplex: Bandra (W)",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        seats: [],
        arrangement:{rows:"ABCDEFGHI",cols:11},
      },
    ],
    shows: [
      {
        title: "Selfiee",

        genre: ["Action", "Comedy", "Drama"],
        duration: "2:25",
        lang: ["Hindi"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICA4LjVLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00321341-evfjsswcqr-portrait.jpg",
      },
      {
        title: "Quantumania",
        genre: ["Action", "Adventure", "Comedy", "Sci-Fi"],
        duration: "2:10",
        lang: ["Hindi", "English"],
        format: ["2D", "3D", "4DX"],
        imgurl:
          "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg",
      },
      {
        title: "Pathan",

        genre: ["Action", "Adventure"],
        duration: "2:45",
        lang: ["Hindi"],
        format: ["2D", "3D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4yLzEwICAzNDMuMksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323848-eqpgjsbaxu-portrait.jpg",
      },
    ],
  },
  {
    id: 5,
    city: "Chennai",
    halls: [
      {
        name: "Cinepolis: BSR Mall, OMR, Thoraipakkam",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        seats: [],
        arrangement:{rows:"ABCDEFGHIJKL",cols:19},
      },
      {
        name: "INOX: Chennai Citi Centre, Dr. RK Salai",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        seats: [],
        arrangement:{rows:"ABCDEFGHIJKLMNOPQ",cols:16},
      },
    ],
    shows: [
      {
        title: "Vaathi",
        genre: ["Action", "Drama"],
        duration: "2:25",
        lang: ["Tamil"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4yLzEwICAxNS4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00335415-fppfnsugwg-portrait.jpg",
      },
      {
        title: "Quantumania",
        genre: ["Action", "Adventure", "Comedy", "Sci-Fi"],
        duration: "2:10",
        lang: ["Hindi", "English"],
        format: ["2D", "3D", "4DX"],
        imgurl:
          "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg",
      },
      {
        title: "Dada",
        genre: ["Drama"],
        duration: "2:15",
        lang: ["Tamil"],
        format: ["2D", "3D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4yLzEwICAzNDMuMksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323848-eqpgjsbaxu-portrait.jpg",
      },
    ],
  },
  {
    id: 6,
    city: "Hyderabad",
    halls: [
      {
        name: "AMB Cinemas: Gachibowli",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        arrangement:{rows:"ABCDEFGHIJKLMN",cols:22},
        seats: [],
      },
      {
        name: "Asian Cineplanet Multiplex: Kompally",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        seats: [],
        arrangement:{rows:"ABCDEFGHIJKL",cols:18},
      },
      {
        name: "Asian CineSquare Multiplex: Uppal",
        timings: [
          { tm: "9:00AM", sbooked: [] },
          { tm: "12:00PM", sbooked: [] },
          { tm: "1:15PM", sbooked: [] },
          { tm: "3:00PM", sbooked: [] },
          { tm: "6:00PM", sbooked: [] },
          { tm: "9:30PM", sbooked: [] },
        ],
        liked: false,
        arrangement:{rows:"ABCDEFGH",cols:9},
        seats: [],
      },
    ],
    shows: [
      {
        title: "Selfiee",
        genre: ["Action", "Comedy", "Drama"],
        duration: "2:25",
        lang: ["Hindi"],
        format: ["2D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICA4LjVLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00321341-evfjsswcqr-portrait.jpg",
      },
      {
        title: "Quantumania",
        genre: ["Action", "Adventure", "Comedy", "Sci-Fi"],
        duration: "2:10",
        lang: ["Hindi", "English"],
        format: ["2D", "3D", "4DX"],
        imgurl:
          "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ant-man-and-the-wasp-quantumania-et00302402-1674555096.jpg",
      },
      {
        title: "Vinaro Bhagyamu Vishnu Katha",
        genre: ["Action", "Adventure"],
        duration: "2:45",
        lang: ["Hindi"],
        format: ["2D", "3D"],
        imgurl:
          "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC41LzEwICAxOS4ySyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00343574-gxfqkrhhmm-portrait.jpg",
      },
    ],
  },
];

const users = [
  {
    firstname: "Ajay",
    lastname: "Naugain",
    email: "test@test.com",
    password: "ajay123",
  },
];

const bookings = [];
module.exports = { movieData, users, bookings };
