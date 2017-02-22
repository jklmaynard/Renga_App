class StanzasController < ApplicationController

  def create
    renga = Renga.find(params[:id])
    stanza = renga.stanzas.create(stanza_params)

    respond_with renga, stanza
  end

  def like
    renga = Renga.find(params[:id])
    stanza = renga.stanzas.find(params[:id])
    stanza.increment!(:likes)
    
    respond_with renga, stanza
  end

  private
  def stanza_params
    params.require(:stanza)
  end
end
