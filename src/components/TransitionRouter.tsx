import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
interface routes {path: string, element: JSX.Element}
export default function TransitionRouter ({ routes }: { routes: routes[] }): JSX.Element {
  const location = useLocation();

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <motion.div initial={{ opacity: 0, x: -50 }} // Start with opacity 0 (completely transparent) and x position -50 (to the left of its original position)
        animate={{ opacity: 1, x: 0 }} // Animate to opacity 1 (fully visible) and x position 0 (original position)
        transition={{ duration: 1 }}>
        <Routes >

          {
            routes.map(item => {
              return (
                <>
                  {
                    routes.map(item => {
                      return (
                        <>
                          <Route {...item}/>
                        </>
                      );
                    })
                  }
                </>
              );
            })
          }
        </Routes>

      </motion.div>
    </div>
  );
}
