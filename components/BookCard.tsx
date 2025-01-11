import React from "react";
import BookCover from "@/components/BookCover";

import { cn } from "@/lib/utils";
import Link from "next/link";



const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  cover,
  isLoanedBook = false,
}: Book) => 
    <li className={cn(isLoanedBook && 'xs:w-52 w-full')}>
        <Link href={`/books/${id}`} className={cn(isLoanedBook && "w-full flex flex-col items-center")}>
            <BookCover coverColor={coverColor} coverImage={cover}/>

            <div>
                <p className="book-title">{title}</p>
            
            </div>
        </Link>
    </li>;

export default BookCard;
