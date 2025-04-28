import React from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "../../Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import HTMLParser from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

import blogData from "@/components/BlogGrid/blogData";

const BlogDetails = () => {
  const params = useParams();
  const {id} = params;

  const data = blogData.find(blog => blog.id == Number(id));
  const sanitizedHtml = DOMPurify.sanitize(data.content);

  return (
    <>
      <Breadcrumb title={"Blog Details"} pages={["blog details"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[900px] w-full mx-auto px-4 sm:px-8 xl:px-0 flex flex-col items-center">
        {HTMLParser(sanitizedHtml)}
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
