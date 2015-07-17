( define || Object )(
	( module && module.exports || this.getset ) = function( key, factory ){
		if( this.has( key ) ){
			return this.get( key )
		}
		else {
			const value = factory()

			this.set( key, value )

			return value
		}
	}
)
