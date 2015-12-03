    //$j = jQuery.noConflict();
    (function ( $j, window, document, undefined ) {
     
        $j.InvResponsiveTable = function(element, options) {
            // Extend default settings
               this.options = {};
    		   element.data('InvResponsiveTable', this);
                var that = this;	
    			this.init = function(element, options) {         
    				this.options = $j.extend({}, $j.fn.InvResponsiveTable.defaultOptions, options);
    				options = this.options;
    				var $table = element;
    				if(!$table.hasClass(options.prefix+"-responsive-table-processed"))
    			   {
    				   var tableID = $table.attr("id");
    				   newID = "";
    				   if(tableID!="" && tableID!==undefined)
    				   {
    					   newID = "id="+options.prefix+"-"+tableID;
    				   }
    		 	  
    				  var tHeadData = new Array();
    				  $table.wrap('<div class="'+options.prefix+'-responsive-table"></div>');
    				  $table.parent().append('<div class="'+options.prefix+'-responsive-table-wrapper"></div>');
    				  $resWrapper = $table.parent().find('.'+options.prefix+'-responsive-table-wrapper');
    				  $table.css("display", "none");
    				  $table.find(options.headerRowData).each(function(index)
    				  {
    					  tHeadData[index] = $j(this).html();
    				  });
    				  var tbl = '';
    				  //alert($table.find("tbody tr").length);
    				  $table.find("tbody tr").each(function(index){
    					  tbl = '<table '+newID+' class="'+options.prefix+'-responsive-table" border="0" cellspacing="0" cellpadding="0">';
    					  tbl+= '<tbody>';
    					  tbl+= '<tr class="'+options.prefix+'-responsive-header-tr"><td class="'+options.prefix+'-responsive-header-td" colspan="2" >'+$j(this).find("th:eq(0)").html()+'</td></tr>';
    					  tmpCnt = 1;
    					  tmpLength = ($j(this).children().length-options.skipIndex);
    					  $j(this).children().each(function(index){
    						//alert(options.skipIndex);								
    						if(index > options.skipIndex)
    						{
    							cls = new Array();
    							clscnt = 0;
    							if(tmpCnt==1){ cls[clscnt]= options.prefix+'-responsive-data-tr-first';clscnt++}
    							if(tmpCnt==(tmpLength-1)){cls[clscnt]= options.prefix+'-responsive-data-tr-last';clscnt++}
    							if(tmpCnt%2==0){cls[clscnt]= options.prefix+'-responsive-data-tr-even';clscnt++}
    							else{cls[clscnt]= options.prefix+'-responsive-data-tr-odd';clscnt++}
    							clsName= cls.join(" ");
    							//alert(clsName);
    							tbl+= '<tr class="'+options.prefix+'-responsive-data-tr '+clsName+'"><td class="'+options.prefix+'-responsive-data-td '+options.prefix+'-responsive-data-header">'+tHeadData[index]+'</td><td class="'+options.prefix+'-responsive-data-td '+options.prefix+'-responsive-data-content">'+$j(this).html()+'</td></tr>';
    							tmpCnt++;
    						}
    					  });
    					  tbl+= '</tbody>';
    					  tbl+= '</table>';
    					  tbl+= '';
    					 // alert(tbl);
    					  $resWrapper.append(tbl);
    					  
    					  
    				  });
    				  $resWrapper.find(".inv-responsive-data-header br").remove();
    				  $table.addClass(options.prefix+"-responsive-table-processed");
    				  runPlugin($table);
    				  $j(window).resize(function(){
    				  	runPlugin($table);
    					
    											 
    				   });
    			   }
    			};
    			
               function runPlugin($table)
    			{
    				options = that.options;
    				if($j(window).width()<=options.switchWidth)
    				{
    					$j('.'+options.prefix+'-responsive-table-wrapper').css("display", "block");
    					$table.css("display", "none");
    				}
    				else
    				{
    					$j('.'+options.prefix+'-responsive-table-wrapper').css("display", "none");
    					$table.css("display", "table");
    				}
    		    }
    			
    		
    		this.init(element, options);
        }
    	
    	$j.fn.InvResponsiveTable = function(options) {                   
    		return this.each(function() {
    			(new $j.InvResponsiveTable($j(this), options));			
    		});        
    	};
     
       // set default option values
        $j.fn.InvResponsiveTable.defaultOptions = {
    		prefix: 'inv',  
    	    headerRowData: 'thead tr:eq(0) th',
    		switchWidth: 640,
    		skipIndex: 0
    		
    	  }
     
    })( $j, window, document );
    $j(document).ready(function()
    {
    	if($j(".rad-responsive").length>0){
    	$j('.rad-responsive').InvResponsiveTable();
        
          
        }
        
    });