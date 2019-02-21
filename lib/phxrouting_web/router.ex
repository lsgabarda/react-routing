defmodule PhxroutingWeb.Router do
  use PhxroutingWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PhxroutingWeb do 
    pipe_through :browser

    get "/", PageController, :index


    get "/about", PageController, :about

    get "/project", PageController, :project
   

    get "/sample", PageController, :sample
   
    
    
    get "/project/todo", PageController, :project
   
    get "/project/calculator", PageController, :project
    
    
  end

  # Other scopes may use custom stacks.
  # scope "/api", PhxroutingWeb do
  #   pipe_through :api
  # end
end
