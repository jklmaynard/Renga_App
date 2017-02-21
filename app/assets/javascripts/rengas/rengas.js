angular.module('rengaApp').factory('rengas', function(){
  var obj = {
    rengas: [
      {title: 'renga 1',
      stanzas: [
        {
          ordinal: 1,
          is_hokku: true,
          is_waki: false,
          is_daisan: false,
          is_ageku: false,
          line_one: "so much depends",
          line_two: "upon",
          line_three: "a red wheel barrow"
        },
        {
          ordinal: 2,
          is_hokku: false,
          is_waki: true,
          is_daisan: false,
          is_ageku: false,
          line_one: "glazed with",
          line_two: "rain water",
          line_three: null
        },
        {
          ordinal: 3,
          is_hokku: false,
          is_waki: false,
          is_daisan: true,
          is_ageku: true,
          line_one: "beside the white",
          line_two: "chickens",
          line_three: null
        }
      ]
    },
      {title: 'renga 2',
      stanzas: [
        {
          ordinal: 1,
          is_hokku: true,
          is_waki: false,
          is_daisan: false,
          is_ageku: false,
          line_one: "so much depends",
          line_two: "upon",
          line_three: "a red wheel barrow"
        },
        {
          ordinal: 2,
          is_hokku: false,
          is_waki: true,
          is_daisan: false,
          is_ageku: false,
          line_one: "glazed with",
          line_two: "rain water",
          line_three: null
        },
        {
          ordinal: 3,
          is_hokku: false,
          is_waki: false,
          is_daisan: true,
          is_ageku: true,
          line_one: "beside the white",
          line_two: "chickens",
          line_three: null
        }
      ]
    }]
  };
  return obj;
})
