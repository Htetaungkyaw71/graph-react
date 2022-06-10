import React from 'react'

function Table() {

    function toggle() {
        console.log("a")
        if(document.getElementById('all').checked){
            document.querySelectorAll('#individual_check').forEach(a=>{
                a.checked = true
            })
        }else{
            document.querySelectorAll('#individual_check').forEach(a=>{
                a.checked = false
            })
        }

    }
  return (
      <div className='table-responsive p-3'>
        
          <input type="checkbox" className='form-check-input' id='all' onClick={toggle}/><label className='sa'>Select All</label>
    <table id="example" className="table cell-border responsive table-bordered dt-responsive nowrap w-100 dataTable no-footer dtr-inline collapsed  " cellSpacing='0' style={{width:"100%"}}>
        <thead>
            <tr>
               
                <th className='sort'>
                    <input type="checkbox" className='form-check-input' />
                </th>
                <th>Scholars</th>
                <th>Shoo Earned</th>
                <th class="sort sorting_disabled" rowspan="1" colspan="1" style={{width: "167px"}} >
                    <span style={{marginRight:"10px"}}>
                    Sort by 
                    </span>
                    
                <select class="form-select" style={{padding:"0.47rem, 1.75rem, 0.47rem, 0.75rem"}}>
                <option>Best</option>
                  <option>Good</option>                
                   <option>Average</option></select></th>
                <th>Income Daily</th>
                <th>Claimable Now</th>
                <th>Last Logged In</th>

                <th>Action</th>
     
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='dt-control'>
                <input type="checkbox" className='form-check-input' id="individual_check" name='foo' />
                </td>    
                <td>Donna Snider</td>
                <td>40,000,000,000</td>
                <td>#1</td>
                <td>952,678,345</td>
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check" style={{color: "#008000"}}><polyline points="20 6 9 17 4 12"></polyline></svg>
                </td>
                <td>2/14/2019 - 10:10</td>
                <td>
                <div className="btn-group">
              
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#F7D1D3",border:"0px",color:"red",fontSize:"13px",padding:"12px"}}>
                            Delete
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Temporary</a></li>
                            <li><a className="dropdown-item" href="#">Permanently</a></li>
                        </ul>
                        </div>
                </td>
            </tr>
            <tr>
                <td className='dt-control'>
                <input type="checkbox" className='form-check-input' id="individual_check"  name='foo' />
                    </td>    
                <td>Michael Bruce</td>
                <td>39,000,000,000</td>
                <td>#2</td>
                <td>876,435,987</td>
                <td> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check" style={{color: "#008000"}}><polyline points="20 6 9 17 4 12"></polyline></svg></td>
                <td>2/15/2019 - 11:10</td>
                <td>
                <div className="btn-group">
              
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#F7D1D3",border:"0px",color:"red",fontSize:"13px",padding:"12px"}}>
                            Delete
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Temporary</a></li>
                            <li><a className="dropdown-item" href="#">Permanently</a></li>
                        </ul>
                        </div>
                </td>
            </tr>
            <tr>
                <td className='dt-control'>
                <input type="checkbox" className='form-check-input' id="individual_check"  name='foo' />
                    </td>    
                <td>Jonas Alexander</td>
                <td>37,000,000,000</td>
                <td>#4</td>
                <td>803,765,987</td>
                <td> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check" style={{color: "#008000"}}><polyline points="20 6 9 17 4 12"></polyline></svg></td>
                <td>2/17/2019 - 10:15</td>
                <td>
                <div className="btn-group">
              
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#F7D1D3",border:"0px",color:"red",fontSize:"13px",padding:"12px"}}>
                            Delete
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Temporary</a></li>
                            <li><a className="dropdown-item" href="#">Permanently</a></li>
                        </ul>
                        </div>
                </td>
            </tr>
            <tr>
                <td className='dt-control'>
                <input type="checkbox" className='form-check-input ml-2' id="individual_check"  name='foo' />
                    </td>    
                <td>Lael Greer</td>
                <td>36,000,000,000</td>
                <td>#5</td>
                <td>792,476,234</td>
                <td> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check" style={{color: "#008000"}}><polyline points="20 6 9 17 4 12"></polyline></svg></td>
                <td>2/18/2019 - 12:10</td>
                <td>
                <div className="btn-group">
              
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"#F7D1D3",border:"0px",color:"red",fontSize:"13px",padding:"12px"}}>
                            Delete
                        </button>
                        <ul class="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Temporary</a></li>
                            <li><a className="dropdown-item" href="#">Permanently</a></li>
                        </ul>
                        </div>
                </td>
            </tr>

           
        </tbody>
    </table>
      </div>

    
  )
}

export default Table