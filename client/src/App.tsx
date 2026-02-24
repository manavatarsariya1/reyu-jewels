
import { RouterProvider } from 'react-router-dom'

import AppRoutes from './routes/Approutes'

function App() {


  return (
    <div className=''>

     <RouterProvider router={AppRoutes}/>
      
        
     
    </div>
  )
}

export default App