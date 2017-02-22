class Renga < ApplicationRecord
  has_many :stanzas

  def as_json(options = {})
    super(options.merge(include: :stanzas))
  end
end
