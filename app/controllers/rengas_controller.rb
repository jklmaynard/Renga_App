class RengasController < ApplicationController

  def index
    respond_with Renga.all
  end

  def create
    respond_with Renga.create(renga_params)
  end

  def show
    respond_with Renga.find(params[:id])
  end

  def like
    renga = Renga.find(params[:id])

    renga.increment!(:likes)
    repond_with renga
  end

  private
  def renga_params
    params.require(:renga).permit(:title, :likes)
  end
end
