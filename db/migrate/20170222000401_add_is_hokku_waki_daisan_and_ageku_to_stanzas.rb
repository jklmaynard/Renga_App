class AddIsHokkuWakiDaisanAndAgekuToStanzas < ActiveRecord::Migration[5.0]
  def change
    add_column :stanzas, :is_hokku, :boolean, :default => 0
    add_column :stanzas, :is_waki, :boolean, :default => 0
    add_column :stanzas, :is_daisan, :boolean, :default => 0
    add_column :stanzas, :is_ageku, :boolean, :default => 0
  end
end
