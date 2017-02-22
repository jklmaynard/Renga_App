class AddLikeIntegerToStanzas < ActiveRecord::Migration[5.0]
  def change
    add_column :stanzas, :likes, :integer, :default => 0
  end
end
