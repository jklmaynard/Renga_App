# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Renga.create([
    {
      title: 'Renga 1',
      id: 0,
      likes: 0
    },
    {
      title: 'Renga 2',
      id: 1,
      likes: 0
    },
    {
      title: 'Renga 3',
      id: 2,
      likes: 0
    }
  ])
  Stanza.create([
    {
      ordinal: 1,
      is_hokku: true,
      is_waki: false,
      is_daisan: false,
      is_ageku: false,
      line_one: "so much depends",
      line_two: "upon",
      line_three: "a red wheel barrow",
      renga_id: 0
    },
    {
      ordinal: 2,
      is_hokku: false,
      is_waki: true,
      is_daisan: false,
      is_ageku: false,
      line_one: "glazed with",
      line_two: "rain water",
      renga_id: 0,
    },
    {
      ordinal: 3,
      is_hokku: false,
      is_waki: false,
      is_daisan: true,
      is_ageku: true,
      line_one: "beside the white",
      line_two: "chickens",
      renga_id: 0
    }
  ])
