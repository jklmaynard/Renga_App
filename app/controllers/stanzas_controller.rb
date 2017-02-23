class StanzasController < ApplicationController

  def index
    renga = Renga.find(params[:renga_id])
    stanzas = renga.stanzas

    respond_with renga, stanzas
  end

  def create
    renga = Renga.find(params[:renga_id])
    stanza = renga.stanzas.create(stanza_params)

    respond_with renga
  end

  def like
    renga = Renga.find(params[:renga_id])
    stanza = renga.stanzas.find(params[:id])
    stanza.increment!(:likes)

    respond_with renga, stanza
  end

  private
  def stanza_params
    params.require(:stanza).permit(:line_one, :line_two, :line_three, :is_hokku, :is_waki, :is_daisan, :is_ageku, :ordinal, :renga_id)
  end
end
