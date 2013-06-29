//Backbone MVC

//To allow the user do experiment jQuery document ready check is commented.
//$(function(){

	/**
	 * Model for nominees.
	 */
	var Nominee = Backbone.Model.extend({
		defaults: {
			name: '',
			votes: 0
		},
		updatePollCount: function(){		
			var votes = this.get('votes');
			votes++;
			this.set('votes',votes);
		}
	});
	
	/**
	 * Collections of nominees.
	 */
	var NomineesList = Backbone.Collection.extend({
		model: Nominee
	});
	
	//Initilize collection
	var nominees = new NomineesList([
		new Nominee({name:'C'}),
		new Nominee({name:'C++'}),
		new Nominee({name:'Java'}),
	]);
	
	/**
	 * Nominees View
	 */
	var pollListRowView = Backbone.View.extend({
	tagName: 'div',
	events: {
		'click button': 'voteFor'
	},
	initialize: function(){
		this.$el.addClass('pollList');
		this.listenTo(this.model, 'change', this.render);
	},
	render: function(){
		var html = '';
		html += 	'<div class="pollName">'+ this.model.get('name') + '</div>';
		html += 	'<div id="cCount" class="pollCount">'+ this.model.get('votes') + '</div>';
		html += 	'<div class="pollButton">';
		html += 		'<button>Vote</button>';
		html +=		'</div>';
	    this.$el.html(html);
		return this;
	},
	voteFor: function(){
		this.model.updatePollCount();
	}
   });
	
	
   /**
    * Poll box view
	*/
   var App = Backbone.View.extend({
		el: $('.pollBox'),
		initialize: function(){
			nominees.bind('add', this.renderNew, this);
			nominees.bind('reset', this.refresh, this);
			this.renderAll();			
		},
		renderAll: function(){
			nominees.each(function(nominee,index){
				this.renderOne(nominee, index);
			},this);
		},
		renderOne: function(model){
			var view = new pollListRowView({model:model});
			this.$el.append(view.render().el);
		},
		renderNew: function(newModel){
			this.renderOne(newModel);
		},
		refresh: function(){
			this.$el.children('.pollList').remove();
			this.renderAll();
		}
	});
	new App();
 
//});