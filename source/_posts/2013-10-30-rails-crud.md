---
layout: post
title: '[Rails] CRUD 備忘'
date: 2013-10-30 01:07
comments: true
categories: [rails]
---
``` ruby index
<%= link_to 'list', teams_path %> # GET

def index
	@teams = Team.all
end
```

``` ruby show
<%= link_to 'show', team_path(team) %> # GET

def show
	@team = Team.find(params[:id])
end
```

``` ruby new
<%= link_to 'new Team', new_team_path %>

def new
	@team = Team.new
end
```
``` ruby create
<%= form_for @team, :url => teams_path do |t| %> #In a form, the default request method is POST
<%= t.text_field :name %>
<%= t.text_field :year %>
<%= t.submit "Create" %>
<% end %>

def create
	Team.create(params[:id])
end
```

``` ruby edit
<%= link_to 'edit', edit_team_path(team) %>

def edit
	@team = Team.find(params[:id])
end
```

``` ruby update
<%= form_for @team, :url => teams_path(@team),:method => :put do |t| %> 
<%= t.text_field :name %>
<%= t.text_field :year %>
<%= t.submit "Create" %>
<% end %>

def update
	@team.update_attributes(params[:team]) #...
end
```

``` ruby destroy
<%= link_to @team, team_path(@team), :method => :delete %>

def destroy
	Team.find(params[:id].destroy
end
```

