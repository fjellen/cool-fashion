import React, { createContext, ReactNode, useState } from "react";

export type wishlistItem = {
  item: {
    attributes: {
      brandLogo: {
        data: [
          {
            attributes: {
              url: string;
            };
          }
        ];
      };
      title: string;
      desc: string;
      slug: string;
      type: string;
      image: {
        data: [
          {
            attributes: {
              url: string;
            };
          }
        ];
      };
      price: number;
    };
  };
};

type wishlistContextType = {
  wishlist: wishlistItem | null;
  setWishlist: React.Dispatch<React.SetStateAction<wishlistItem | null>>;
};

type userProviderProps = {
  children: ReactNode;
};

export const WishlistContext = createContext<wishlistContextType | null>(null);

export const WishlistProvider = ({ children }: userProviderProps) => {
  const [wishlist, setWishlist] = useState<wishlistItem | null>(null);
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
