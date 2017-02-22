class AddLikesToRengas < ActiveRecord::Migration[5.0]
  def change
    add_column :rengas, :likes, :integer, :default => 0
  end
end
