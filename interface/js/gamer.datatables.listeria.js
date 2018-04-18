//------------------------------------------------//
//          SemanticUI JS initialisation          //
//------------------------------------------------//
// Turn on dropdown
$('.ui.dropdown').dropdown(); 
// Turn on accordion effect
$('.ui.accordion').accordion(); 
// Turn on tab effect
$('.menu .item').tab(); 
// Turn on closable message boxes and "fade" closing transition
$('.message .close').on('click', function() 
{
    $(this)
    .closest('.message')
    .transition('fade')
});
$("#helpme").click(function()
{
    $('.longer.modal').modal({
    inverted: false
  }).modal('show');
});
//fermer modal effect au clic
$("#cancel").click(function()
{
    $('.longer.modal').modal('hide');
});
//fermer les messages a la demande
$('.message .close').on('click', function()
{
    $(this)
    .closest('.message')
    .transition('fade')
});
// Preview MultiQC au clic
$("#multiqc").click(function()
{
    $('#multiQC').modal('show');
});
$('.ui.sticky')
.sticky({
    offset : 80, // adjust all values so that content does not overlap any content between the top of the browser and the specified value
    bottomOffset: 20, // same for the bottom of the browser
    observeChanges:true
});
//embed videos
$('.ui.embed').embed();

//------------------------------------------------//
//              Other JS functions                //
//------------------------------------------------//

//Generate uuids
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


//-------------------------------------------------//
// DataTables initialisation and behavior settings //
//-------------------------------------------------//
$(document).ready(function() { 
	var table = $('#table_id').DataTable( 
    {
        data: data,
        columns: 
        [   
            { data: 'SampleID' , "title": "Strain ID"},
            { data: 'Project' , "title": "Project"},
            { data: 'Reads.Center' , "title": "Center"},
            { data: 'Phylogeny.SequenceType' , "title": "Predicted ST"},
            { data: 'Phylogeny.ClonalComplex' , "title": "Predicted CC"},
            { data: 'Reads.FASTQC_pair1', "title": " Fastqc R1"},
            { data: 'Reads.FASTQC_pair2' , "title": "Fastqc R2"},
            { data: 'Reads.FASTQ_pair1' , "title": "Normalized reads R1"},
            { data: 'Reads.FASTQ_pair2' , "title": "Normalized reads R2"},
            { data: 'Reads.VCF' , "title": "Variants"},
            { data: 'Genome.Contigs' , "title": "Contigs"},
            { data: 'Genome.Assembly' , "title": "Assembly"},
            { data: 'Genome.QUAST' , "title": "Assembly quality"},
            { data: 'Genome.GFF' , "title": "GFF"},
            { data: 'Genome.GBK' , "title": "GBK"},
            { data: 'Report' , "title": "ARTwork report"},
            { data: 'Report' , "title": "ARTwork HTML report"}
        ],
        columnDefs: 
        [   
            {
                "targets": 0,
                orderable: true,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<b>'+data+'</b>';
                }
            },
            {
                "targets": 5,
                orderable: false,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" target="_blank" rel="noopener noreferrer">R1</a>';
                }
            },
            {
                "targets":6,
                orderable: false,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" target="_blank" rel="noopener noreferrer">R2</a>';
                }
            },
            {
                "targets":7,
                orderable: false,
                "data": "download_link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" download>R1</a>';
                }
            },
            {
                "targets":8,
                orderable: false,
                "data": "download_link",
                "render": function ( data, type, row, meta )
                {
                    return '<a href="'+data+'" download>R2</a>';
                }
            },
            {
                "targets":9,
                orderable: false,
                "data": "download_link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" download>gVCF</a>';
                }
            },
            {
                "targets":10,
                visible:false,
                orderable: false,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" target="_blank" rel="noopener noreferrer">Fasta</a>';
                }
            },
            {
                "targets":11,
                orderable: false,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" target="_blank" rel="noopener noreferrer">Fasta</a>';
                }
            },
            {
                "targets":12,
                orderable: false,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" target="_blank" rel="noopener noreferrer">Quast</a>';
                }
            },
            {
                "targets":13,
                visible:false,
                orderable: false,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" target="_blank" rel="noopener noreferrer">GFF</a>';
                }
            },
            {
                "targets":14,
                orderable: false,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" target="_blank" rel="noopener noreferrer">GBK</a>';
                }
            },
            {
                "targets":15,
                orderable: false,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'" target="_blank" rel="noopener noreferrer">Txt</a>';
                }
            },
            {
                "targets":16,
                visible:false,
                orderable: false,
                "data": "link",
                "render": function ( data, type, row, meta ) 
                {
                    return '<a href="'+data+'.html'+'" target="_blank" rel="noopener noreferrer">View</a>'; //important ==> format txt.html
                }
            }
        ],
        //"scrollX": true, // Vertically scrollable table
        select: 
            {
    	       style: 'os',
            },
        lengthChange: false, // do not display second lengthMenu button (used in order to add "show all" option in pageLength)
        colReorder: true,
        lengthMenu: [
            [ 10, 25, 50, -1 ],
            [ 'Show 10 rows', 'Show 25 rows', 'Show 50 rows', 'Show all rows' ]
        ],
        language: {
            search: 'Search: <span class="ui input">_INPUT_</span>'
            },
        buttons:[
                    //Select all rows button: no config --> no {'extend',..}
                    'selectAll',
                    //copy button : export only STRAIN ID
                    { 
                        extend: 'copyHtml5', header : false , messageBottom:false,text: 'Copy ids',title:'',exportOptions: {columns: 0, orthogonal: 'fullNotes'}
                    },
                    //excel button : export only colums containing text metadatas (not links to files)
                    { 
                        extend: 'excel', text: 'Excel', messageBottom:false, exportOptions: {columns: [0,1,2,3,4]}
                    },
                    //pdf button : eexport only colums containing text metadatas (not links to files), at a landscape format (useful in order to do not crop table)
                    {
                        extend: 'pdfHtml5', orientation: 'landscape', pageSize: 'LEGAL', messageBottom:false, exportOptions: {columns: [0,1,2,3,4]}
                    },
                    //column visibility button
                    {
                        extend:  'colvis' , text: 'Columns'
                    },
                    //Show x rows button: no config --> no {'extend',...}
                    'pageLength',
                    {
                        // Launch download on click
                        text: 'Download',action: function () 
                        {
                            //SERVER SIDE zip and download    
                            var currentDate = new Date(Date.now()).toLocaleString();
                            var count = table.rows( { selected: true } ).count(); // number of selected rows
                            var toDownload={}; 
                            var formatToDownload=[];
                            var selectedRadios=$('.ui.radio.checkbox.checked label') // contains <labels> from selected radio checkboxes
                            if (selectedRadios.length===0)
                            {
                                //alert('Please select which kind of files you want to download (bottom section : download settings)')
                                $('.small.modal.pleaseselect').modal('show')
                            }
                            else // launch file compression only if file format is selected
                            {
                                $('.basic.modal.preparing').modal('show')
                                for (var i=0;i<selectedRadios.length;i++)
                                {
                                    formatToDownload.push(selectedRadios[i].innerHTML) //add <labels> (Normalised reads, Variants...) content to formatToDownload[]
                                }

                                for (var i=0 ; i<count ; i ++) // Create a JSON containing href links to download
                                {    
                                    // Generates a JSON including all files that meets the formats included in formatToDownload[]
                                    if(formatToDownload.includes('Normalized reads')) // add Fastq if Normalized reads selected
                                    {
                                        toDownload["FASTQ_pair1_"+i]=table.rows( { selected: true } ).data({ selected: true })[i].Reads.FASTQ_pair1
                                        toDownload["FASTQ_pair2_"+i]=table.rows( { selected: true } ).data({ selected: true })[i].Reads.FASTQ_pair2
                                    }
                                    if(formatToDownload.includes('Variants')) // add Fastq if Normalized reads selected
                                    {
                                        toDownload["VCF_"+i]=table.rows( { selected: true } ).data({ selected: true })[i].Reads.VCF
                                    }
                                    if(formatToDownload.includes('Contigs')) // add Fastq if Normalized reads selected
                                    {
                                        toDownload["Contigs_"+i]=table.rows( { selected: true } ).data({ selected: true })[i].Genome.Contigs
                                    }
                                    if(formatToDownload.includes('Assembly')) // add Fastq if Normalized reads selected
                                    {
                                        toDownload["Assembly_"+i]=table.rows( { selected: true } ).data({ selected: true })[i].Genome.Assembly
                                    }
                                    if(formatToDownload.includes('GFF')) // add Fastq if Normalized reads selected
                                    {
                                        toDownload["GFF_"+i]=table.rows( { selected: true } ).data({ selected: true })[i].Genome.GFF
                                    }
                                    if(formatToDownload.includes('GBK')) // add Fastq if Normalized reads selected
                                    {
                                        toDownload["GBK_"+i]=table.rows( { selected: true } ).data({ selected: true })[i].Genome.GBK
                                    }
                                    if(formatToDownload.includes('ARTwork report')) // add Fastq if Normalized reads selected
                                    {
                                        toDownload["Report_"+i]=table.rows( { selected: true } ).data({ selected: true })[i].Report
                                    }
                                }
                                console.log("get : \n"+JSON.stringify(toDownload))
                                $.ajax({
                                    url: document.URL+"/"+uuidv4(), 
                                    type: 'POST', 
                                    contentType: 'application/json', 
                                    data:toDownload,
                                    success: function(msg){
                                    console.log('form submitted. Response payload: '+ msg);
                                    window.location="../../"+msg // change window.location in order to launch dl;
                                    console.log('POST response payload');
                                        $('.basic.modal.preparing').modal('hide')
                                    },
                                    error : function(){
                                        console.error('something bad happened with donwload process')
                                    }
                                })
                            }      
                            //CLIENT SIDE zip and download
                            /*var currentDate = new Date(Date.now()).toLocaleString();
                            var count = table.rows( { selected: true } ).count(); // number of selected rows
                            var toDownload=[];
                            var zip = new JSZip();
                            // Add an top-level, arbitrary text file with contents
                            //zip.file("Readme", "Here you can find the files downloaded from GAMeR genomic database at : "+currentDate);  
                            // Generate a directory within the Zip file structure
                            var allfiles = zip.folder("Strains");
                            allfiles.file("Readme", "Here you can find the files downloaded from GAMeR genomic database at : "+currentDate);
                            for (var i=0 ; i<count ; i ++)
                            {
                                toDownload.push(table.rows( { selected: true } ).data({ selected: true })[i].Genome.Contigs)
                            }
                            var dldata=[]
                            var promise=[]
                            for (var i=0 ; i<count ; i ++)
                            {
                                var fileTypeList=[
                                'Reads.FASTQC_pair1',
                                'Reads.FASTQC_pair2',
                                'Reads.VCF',
                                'Genome.Contigs',
                                'Genome.Assembly',
                                'Genome.QUAST',
                                'Genome.GFF',
                                'Genome.GBK',
                                'Report']
                                
                                dldata[i]=table.rows( { selected: true } ).data({ selected: true })[i].Genome.GFF
                                //Force synchronous Download 
                                promise[i] = $.get({url: dldata[i],
                                                    async:false}
                                                   );
                                //sleep(300)
                                // Add a file to the directory, in this case an image with data URI as contents
                                allfiles.file(dldata[i],promise[i]);
                                console.log(dldata[i])                
                            }                
                            // Generate the zip file asynchronously
                            console.log("generatesync")
                            allfiles.generateAsync({
                                type: "blob",
                                compression: "STORE",
                                streamFiles:true,
                                //compressionOptions: {
                                //    level: 1
                                //}
                            }).then(function(blob) {
                                // Force down of the Zip file
                                saveAs(blob, "Strains_data.zip");
                            });*/                   
                        }
                    }
                ]   
    });
    //Append content to DataTable
	table.buttons().container().appendTo( $('div.eight.column:eq(0)', table.table().container()));
    
    //-------------------------------------------------------------------------------------//
    // FROM HERE : everything that need to be declared/used after DataTatables processing  //
    //-------------------------------------------------------------------------------------//
    
    // Add download settings checkbox event listeners
    $('.ui.radio.checkbox').checkbox('attach events','.ui.slider.checkbox', 'onBeforeChecked'); //"onBeforeChecked" = invert (check) status. More useful than "check"
    // Réinit "ui sticky" menu if the DataTables length is modified by the client. Then sticky menu can stay sticky by considering the new page length.
    $('.ui.button.button-page-length').on('click', function()
    {
        $('.ui.sticky').sticky({
        offset : 80, // adjust all values so that content does not overlap any content between the top of the browser and the specified value
        observeChanges:true
        });
    })
});