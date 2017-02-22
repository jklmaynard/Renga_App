class AddRengaIdToStanzasTable < ActiveRecord::Migration[5.0]
  def change
    add_column :stanzas, :renga_id, :integer
  end
end
