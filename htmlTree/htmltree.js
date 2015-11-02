function startUp()
{
  initHTMLTree();
  showTree()
}

function showTree()
{
  document.getElementById("theTreeOptionsWrapper").style.display = "none";
  $("#theTreeWrapper").fadeIn();
  $("#previewWrapper").fadeOut();
  $("#treeButton").addClass("active");
  $("#previewButton").removeClass("active");
}

function showPreview()
{
  $("#theTreeWrapper").fadeOut();
  $("#previewWrapper").fadeIn();
  $("#treeButton").removeClass("active");
  $("#previewButton").addClass("active");
}

var allRoots = [];
var bodyID = null;

function addNewElement()
{
    $("#HTMLTree").addClass("hideEdit");
    var node = theHTMLTree.tree('getNodeById', bodyID);
    if(node){
        $('#HTMLTree').tree(
               'addNodeBefore',
                {
                  id: new Date().getTime().toString(),
                  label : "<DIV>",
                  nodeID: "",
                  style: "",
                  className: "",
                  innerHTML: "",
                  children:[],
                  type: "DIV" 
                },
                node
        );
    }
}




var theHTMLTree = null;


function initHTMLTree()
{
    var row =  [{
              id: new Date().getTime().toString(),
              label : "<BODY>",
              nodeID: "",
              children:[],
              type: "BODY",
              style: "",
              className: "",
              innerHTML: ""
          }];
          bodyID = row[0].id;

      theHTMLTree = $('#HTMLTree').tree({
          dragAndDrop: true,
          autoOpen: 0,
          data: row,
          onCreateLi: function(node, $li) {
            /*
              $li.find('.jqtree-element').append(
                '<a href="javascript:nodeOptions(' + "'" + node.id + "','" + node.type + "'," + node.getLevel() + ")" + '" class="edita link" data-node-id="'+
              node.id +'">edit</a>'
              );
             */
          },
          onCanMoveTo: function(moved_node, target_node, position) {
               return true;
           }
      });
      $('#HTMLTree').bind(
               'tree.move',
                function(event) {
                      aHTMLTreeNodeWasMoved();
                      if(event.node){
                          var node = event.node;
                      }
                }
       );

        $('#HTMLTree').bind(
               'tree.select',
                function(event) {
                   if (event.node) {
                      var node = event.node;
                      currEditNode = node;
                      aHTMLTreeNodeWasSelected();
                   }
                }
       );}

function aHTMLTreeNodeWasMoved()
{
}

function cancelClicked()
{
    document.getElementById("theTreeWrapper").style.display = "block";
    document.getElementById("theTreeOptionsWrapper").style.display = "none";
}


function aHTMLTreeNodeWasSelected()
{
    document.getElementById("treeSelector").style.display = "none";
    document.getElementById("theTreeWrapper").style.display = "none";
    document.getElementById("theTreeOptionsWrapper").style.display = "block";
    populateNodeAttrs();
}

function populateNodeAttrs()
{
  var keys = Object.keys(currEditNode);
  var outS = "";

  // do something
  
  outS = "<span>ID : </span>" +
        "<span>" + currEditNode.id;

  document.getElementById("attrWrapper").innerHTML = outS;

}

var currEditNode = null;
var currWidget = null;

function getPagePreview(pInfo)
{
}


function nodeOptions(nodeID, type, level)
{
    currEditNode = nodeID;
    var theNode = theHTMLTree.tree('getNodeById', currEditNode);
    var keys = Object.keys(theNode);
   
}

function backClicked()
{
  cancelEdit(); 
}

function cancelEdit()
{
}

    

function saveEdit()
{
          theNode = theHTMLTree.tree('getNodeById', currEditNode);
          theHTMLTree.tree(
             'updateNode',
             theNode,
             {
                 label: document.getElementById("menuNodeName").value,
                 subname: document.getElementById("menuNodeSubName").value,
                 icon: document.getElementById("faSel").value
             }
           );
}

function deletePage()
{
    dialogConfirm.display("Delete Page# <div class='font75'>" + currEditNode + "</div>", "fa fa-file-text-o", "Cancel", null, "Delete", "pageDeleteYesClicked()");
}

function pageDeleteYesClicked()
{
    activityIndicator.show();
    var node = theHTMLTree.tree('getNodeById', currEditNode);
    if(node){
        $('#HTMLTree').tree(
               'removeNode',
                node
        );
        document.getElementById("navMapOptionsWrapper").display = "none";
        aHTMLTreeNodeWasMoved();
    }
    cancelEdit();
}


