class CreateStanzas < ActiveRecord::Migration[5.0]
  def change
    create_table :stanzas do |t|
      t.integer :ordinal
      t.string :line_one
      t.string :line_two
      t.string :line_three

      t.timestamps
    end
  end
end
