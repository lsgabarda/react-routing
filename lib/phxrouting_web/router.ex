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


    get "/about/", PageController, :index

    get "/project/", PageController, :index
    get "/project/todo", PageController, :index   
    get "/project/calculator", PageController, :index   
    #get "/project/calculator",  Redirect ,(to: "/project")

    get "/sample", PageController, :index
  
    
  
    
    #get "/project/todo", PageController, :index
   
    # get "/project/calculator", PageController, :project
    
    
  end

  # Other scopes may use custom stacks.
  # scope "/api", PhxroutingWeb do
  #   pipe_through :api
  # end
end

####################################

# defmodule MyApp.SlugRouter do
#   import Plug.Conn

#   def init(opts), do: opts

#   def call(%Plug.Conn{params: %{"id" => id}} = conn, action) do
#     cond do
#       Regex.match?(~r/^\d{5}$/, id) ->
#         SomeController.call(conn, SomeController.init(action))
#       true -> conn
#     end
#   end
# end

# defmodule Booking do
#   use PhxroutingWeb, :controller
  
#   def index(conn, _params) do
#     Regex.match?(~r/^boo$/, id) ->
#       render(conn, "index.html")
#   end

# end
