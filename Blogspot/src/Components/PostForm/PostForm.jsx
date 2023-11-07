import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import RTE from "../RTE";
import dbService from "../../Appwrite/Configuration";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  //const navigate=useNavigate()
  const userData = useSelector((state) => state.userData);
  const submit = async (data) => {
    if (post) {
      const file = (await data.image[0])
        ? dbService.uploadFile(data.image[0])
        : null;
      if (file) {
        dbService.deletefile(post.featuredImage);
      }
      const newpost = await dbService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (newpost) {
        //navigate(`/post/${newpost.%id}`)
      }
    } else {
      const file = await dbService.uploadFile(data.image[0]);
      if (file) {
        const file_id = file.$id;
        data.featuredImage = file_id;
        const newPost = await dbService.createPost({
          ...data,
          userid: userData.$id,
        });

        if (newPost) {
          //navigate(`/post/${newpost.%id}`)
        }
      } else {
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, '-')
        .replace(/\s/g, '-');
    }
    else {
        return "";
    }
  },[]);

  useEffect(()=>{
      const subscription=watch((value,{name})=>{
        if (name=='title'){
            setValue('slug',slugTransform(value.title))
        }
      })

      return ()=>{
        subscription.unsubscribe()
      }
  },[watch,slugTransform,setValue])
  return <div></div>;
}

export default PostForm;
