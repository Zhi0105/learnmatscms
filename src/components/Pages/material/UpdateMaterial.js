import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { decodeURL } from 'src/utils/helpers'
import { Controller, useForm } from "react-hook-form";
import { MaterialContext } from 'src/contexts/MaterialContext';
import { useUserStore } from 'src/store/auth';
import { UseClassLevelStore } from 'src/store/classlevel';
import { DropDown } from 'src/components/Partial/Select';


export const UpdateMaterial = () => {
  const params = useParams()
  const { material } = params
  const { updateMaterial, updateMaterialLoading } = useContext(MaterialContext)
  const { classlevels } = UseClassLevelStore((state) => ({ classlevels: state.classlevels }));
  const { token } = useUserStore((state) => ({ token: state.token }));

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      classlevel_id: decodeURL(material).classlevel_id,
      name: decodeURL(material).name,
      material_icon: decodeURL(material).material_icon,
      material_description: decodeURL(material).material_description,
      material_description_image: decodeURL(material).material_description_image
    },
  });


  const onSubmit = (data) => {
    if(token) {
      let payload = {
        material_id: decodeURL(material).id,
        classlevel_id: data.classlevel_id,
        name: data.name,
        material_icon: data.material_icon,
        material_description: data.material_description,
        material_description_image: data.material_description_image,
        user: token
      }
      updateMaterial(payload)
    }
  }

  return (
    <div className='update-material-main min-h-screen bg-gray-200 w-full flex justify-center items-center'>
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className='form_container bg-white rounded-lg shadow-xl p-8 flex flex-col gap-4'>
        <h1 className='text-center text-2xl font-bold mb-4'> Update Material: </h1>

          <div className='classlevel_field'>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <DropDown
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                  className={`h-full w-full border-2 p-2 text-center rounded-lg outline-none appearance-none`}
                  ariaPlaceHolder="Choose class level"
                  required={true}
                  data={classlevels}
                />
              )}
              name="classlevel_id"
            />
            {errors.classlevel_id && (
              <p className="text-sm text-red-400 indent-2">classlevel is invalid*</p>
            )}            
          </div>

          <div className='name_field'>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: /^[a-zA-Z0-9]+$/
                }}
                render={({ field: { onChange, value } }) => (
                  <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="enter a material name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                )}
                name="name"
              />
              {errors.name && (
                <p className="text-sm text-red-400 indent-2">name is invalid*</p>
              )}            
          </div>

          <div className='icon_field'>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: /^[a-zA-Z0-9]+$/
                }}
                render={({ field: { onChange, value } }) => (
                  <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    name="icon"
                    id="icon"
                    placeholder="Icon"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                )}
                name="material_icon"
              />
              {errors.material_icon && (
                <p className="text-sm text-red-400 indent-2">icon is invalid*</p>
              )}            
          </div>

          <div className='description_field'>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: /^[a-zA-Z0-9]+$/
                }}
                render={({ field: { onChange, value } }) => (
                  <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    name="description"
                    id="description"
                    placeholder="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                )}
                name="material_description"
              />
              {errors.material_description && (
                <p className="text-sm text-red-400 indent-2">description is invalid*</p>
              )}            
          </div>

          <div className='description_image_field'>
              <Controller
                control={control}
                rules={{
                  required: true,
                  pattern: /^[a-zA-Z0-9]+$/
                }}
                render={({ field: { onChange, value } }) => (
                  <input
                    value={value}
                    onChange={onChange}
                    type="text"
                    name="description_img"
                    id="description_img"
                    placeholder="description_img"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                )}
                name="material_description_image"
              />
              {errors.material_description_image && (
                <p className="text-sm text-red-400 indent-2">image description is invalid*</p>
              )}            
          </div>

          <div className="min-w-[20rem]">
            <button
              disabled={updateMaterialLoading}
              type="submit"
              className="w-full text-gray-900 bg-green-400 flex justify-center items-cente selection:cursor-pointer mt-2 mb-4 p-2 rounded-lg"
            >
                {updateMaterialLoading ? "Please wait..." : "Update" }
            </button>
          </div>
      </form>
    </div>
  )
}
