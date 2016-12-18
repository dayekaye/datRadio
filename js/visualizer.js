		//global variables.
		var scene, camera, renderer, controls, container;
		//var cubes = new Array();
		var clock = new THREE.Clock();
		var raycaster, helpRaycaster;
		var mouse;
		var objects = new Array();	
		var targetRotation = 0;
		var targetRotationOnMouseDown = 0;
		var windowHalfX = window.innerWidth / 2;
		var windowHalfY = window.innerHeight / 2;
		var mouseX = 0;
		var mouseXOnMouseDown = 0;
		var helpArray = new Array();
		var spinAble = new Array();


		
		container = document.createElement( 'div' );
		document.body.appendChild( container );

		scene = new THREE.Scene();
		//scene.fog = new THREE.Fog( 0xD997CC, .25, 999 );
		
		raycaster = new THREE.Raycaster();
		helpRaycaster = new THREE.Raycaster();

		mouse = new THREE.Vector2();
			
		renderer = new THREE.WebGLRenderer({antialias:true});
		renderer.setClearColor( 0x050505 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize(window.innerWidth, window.innerHeight );
		
		container.appendChild( renderer.domElement );

	//var gridHelper = new THREE.GridHelper( 50, 1 );
	//gridHelper.position.z = 10

	//scene.add( gridHelper );


	var render = function () {	
		var delta = clock.getDelta();

				//need to work on this logic sos that each cube is a different part of an array and it goes through that array instead of using index i
				if(typeof array === 'object' && array.length > 0) {
					var k = 0;
					var freq;
					var scale;
					var upDown = 0
				}
					

    	controls.update( delta );
		requestAnimationFrame(render);
		renderer.render( scene, camera );
		}


	function onDocumentMouseDown( event ) {

				event.preventDefault();

				targetRotationOnMouseDown = targetRotation;
				mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
				mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;

				// raycaster.setFromCamera( mouse, camera );
				// helpRaycaster.setFromCamera( mouse, camera );
				// //objects needs to be changed out with an Array of all the arrays but then logic needs to be changed throughout.
				// var intersects = raycaster.intersectObjects( objects );
				// // this.helpRaycaster.set( this.camera.position, vector.sub( this.camera.position ).normalize() );
				// //var helpIntersects = helpRaycaster.intersectObjects( spinAble );
				// //Change on click to set bright point light make cube glow
				// if ( intersects.length > 0 ) {

				// 	intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
				// 	//console.log("X: " + intersects[ 0 ].object.position.x);
				// 	//console.log("Y: " + intersects[ 0 ].object.position.y);
				// 	//console.log("Z: " + intersects[ 0 ].object.position.z);
				// 	//console.log("-------------------------------------");


				}
			// 	var intersect = this.helpRaycaster.intersectObjects(this.objects);
			// 	if( intersect.length > 0 ) {
			// 		intersect[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );

					
					
			// }
		}
			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}
			//touch controls
			function onDocumentTouchStart( event ) {

				if ( event.touches.length === 1 ) {

				event.clientX = event.touches[0].clientX;
				event.clientY = event.touches[0].clientY;
				onDocumentMouseDown( event );
					event.preventDefault();
					//raycaster.setFromCamera( mouse, camera );

				//var intersects = raycaster.intersectObjects( objects );
				//Change on click to set bright point light make cube glow
				//if ( intersects.length > 0 ) {

					//intersects[ 0 ].object.material.color.setHex( Math.random() * 0xffffff );
					mouseXOnMouseDown = event.touches[0].object.pageX - windowHalfX;
					//targetRotationOnMouseDown = targetRotation;

				//}
					

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length === 1 ) {

					event.preventDefault();
					//raycaster.setFromCamera( mouse, camera );
					onDocumentMouseDown( event );
					//var intersects = raycaster.intersectObjects( objects );
					//if ( intersects.length > 0 ) {
						mouseX = event.touches[ 0 ].pageX - windowHalfX;
						//targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

					//}
				}
	     	}
	
	render();
	renderer.setSize( window.innerWidth, window.innerHeight );
