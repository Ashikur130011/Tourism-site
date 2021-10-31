import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Packages from '../../Home/Packages/Packages';
import Img from '../../../images/img-3.jpg';
import './AddPackage.css'


const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        data["Destination"]=Packages.location || "";
        axios.post('https://powerful-hollows-40819.herokuapp.com/package', data)
          .then(res => {
              console.log(res.data);
            if(res.data.insertedId) {
              alert('Package added successfully');
              reset();
            }
          })
      }
    return (
        <div >
            <div className="container py-5">
          <form onSubmit={handleSubmit(onSubmit)} style={{backgroundImage: `url(${Img})`}} className="border border-3 border-primary shadow-lg p-4 add-bg">
          
            <div className="row ">
            <h1 className="p-4 text-primary">Add New Package</h1>
                
              <div className="col-md-6">
                <h5 className="fw-bold text-danger">Location</h5>
                <input {...register("location")} placeholder="Add location here.." className="w-75" />
                <h5 className="fw-bold text-danger">Description</h5>
                <textarea
                  {...register("description")}
                  placeholder="Add Description" className="w-75"
                />
              </div>
              <div className="col-md-6">
              <h5 className="fw-bold text-danger">Package</h5>
                <input {...register("name")} placeholder="Add package here" className="w-75"/>
                
                <h5 className="fw-bold text-danger">Ticket Available</h5>
                <input {...register("available")} placeholder="Tickets" className="w-75"/>

                <h5 className="fw-bold text-danger">Img Link</h5>
                <input {...register("img")} placeholder="Image Link"className="w-75" />
              </div>
                    </div>
                    <button className='btn btn-success my-4 fw-bold'>Submit</button>
          </form>
          
        </div>
        </div>
    );
};

export default AddPackage;