create database lifestyle;


CREATE TABLE AdminLogin (
  AdminID INT IDENTITY(1,1) PRIMARY KEY,
  FirstName VARCHAR(50) NOT NULL,
  LastName VARCHAR(50) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  Password VARCHAR(50) NOT NULL,

  CONSTRAINT CHK_AdminLogin_Email CHECK (Email LIKE '%@gmail.com'),
  CONSTRAINT CHK_AdminLogin_Password CHECK (LEN(Password) >= 6 AND Password LIKE '%[0-9]%' AND Password LIKE '%[a-zA-Z]%')
);


INSERT INTO AdminLogin (FirstName, LastName, Email, Password) VALUES 
('Divyashree', 'C', 'Divyashreec@gmail.com','Admin@123'),
('Syed', 'Ayan', 'ayan@gmail.com','Admin@123'), 
('Likhitha', 'B G', 'likhitha@gmail.com','Admin@123');


select * from AdminLogin;

CREATE TABLE Categories (
  category_id INT IDENTITY(1,1) PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL,
  UNIQUE(category_name)
);


INSERT INTO Categories ( category_name) VALUES ('Kitchen-items');
INSERT INTO Categories ( category_name) VALUES ('Furniture-items');
INSERT INTO Categories ( category_name) VALUES ('Laundry-items');
INSERT INTO Categories ( category_name) VALUES ('Cooling Appliances');
INSERT INTO Categories ( category_name) VALUES ('Entertainment Appliances');
INSERT INTO Categories (category_name) VALUES ('Home Decor');
INSERT INTO Categories (category_name) VALUES ('Electronics');
INSERT INTO Categories (category_name) VALUES ('Outdoor');
INSERT INTO Categories (category_name) VALUES ('Personal Care');
INSERT INTO Categories (category_name) VALUES ('Sports Equipment');




select * from Categories;


CREATE TABLE Inventories (
  inventory_id INT IDENTITY(1,1) PRIMARY KEY,
  category_id INT,
  category_name VARCHAR(255),
  inventory_name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  quantity INT NOT NULL,
  seller VARCHAR(255) NOT NULL,
  description TEXT,
  sold_items INT,
  sold_date DATE,
  FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);



-- Inserting data into the Inventories table
INSERT INTO Inventories (category_id,category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
VALUES (1,'Kitchen-items ','Refrigerators', 30000, 10, 'No1 Electronics showroom', 'A wide range of refrigerators for your kitchen', 5, CAST('2023-06-01' AS DATE));

INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 1, 'Kitchen-items', 'Microwave', 5000, 20, 'No1 Electronics showroom', 'Advanced microwave for quick cooking', 10, '2023-06-02'
UNION ALL
SELECT 1, 'Kitchen-items', 'Blender', 2000, 15, 'No1 Electronics showroom', 'Powerful blender for smoothies and shakes', 8, '2023-06-03'
UNION ALL
SELECT 1, 'Kitchen-items', 'Toaster', 1500, 12, 'No1 Electronics showroom', 'Convenient toaster for toasting bread', 6, '2023-06-04'
UNION ALL
SELECT 1, 'Kitchen-items', 'Coffee Maker', 3000, 10, 'No1 Electronics showroom', 'Coffee maker for brewing delicious coffee', 4, '2023-06-05'
UNION ALL
SELECT 1, 'Kitchen-items', 'Cookware Set', 8000, 8, 'Kitchen Essentials', 'High-quality cookware set for your kitchen', 3, '2023-06-06';



INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 2, 'Furniture-items', 'Sofa', 25000, 5, 'Home Decor Furniture Store', 'Comfortable sofa for your living room', 2, '2023-06-07'
UNION ALL
SELECT 2, 'Furniture-items', 'Dining Table', 15000, 3, 'Home Decor Furniture Store', 'Elegant dining table for family gatherings', 1, '2023-06-08'
UNION ALL
SELECT 2, 'Furniture-items', 'Bed', 30000, 4, 'Home Decor Furniture Store', 'Cozy bed for a good night sleep', 2, '2023-06-09'
UNION ALL
SELECT 2, 'Furniture-items', 'Bookshelf', 8000, 6, 'Home Decor Furniture Store', 'Stylish bookshelf for organizing your books', 3, '2023-06-10'
UNION ALL
SELECT 2, 'Furniture-items', 'TV Stand', 10000, 4, 'Home Decor Furniture Store', 'Sleek TV stand for your entertainment setup', 2, '2023-06-11';




INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 3, 'Laundry-items', 'Washing Machine', 20000, 8, 'Appliance Superstore', 'Efficient washing machine for your laundry needs', 4, '2023-06-12'
UNION ALL
SELECT 3, 'Laundry-items', 'Dryer', 15000, 6, 'Appliance Superstore', 'Convenient dryer for quick drying of clothes', 3, '2023-06-13'
UNION ALL
SELECT 3, 'Laundry-items', 'Iron', 1000, 10, 'Home Essentials', 'Powerful iron for wrinkle-free clothes', 5, '2023-06-14'
UNION ALL
SELECT 3, 'Laundry-items', 'Laundry Basket', 500, 15, 'Home Essentials', 'Durable laundry basket for organizing your laundry', 8, '2023-06-15'
UNION ALL
SELECT 3, 'Laundry-items', 'Drying Rack', 800, 12, 'Home Essentials', 'Versatile drying rack for air-drying clothes', 6, '2023-06-16';



INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 4, 'Cooling Appliances', 'Air Conditioner', 35000, 5, 'Appliance Superstore', 'Powerful air conditioner for a cool environment', 2, '2023-06-17'
UNION ALL
SELECT 4, 'Cooling Appliances', 'Ceiling Fan', 2000, 10, 'Home Essentials', 'Energy-efficient ceiling fan for air circulation', 5, '2023-06-18'
UNION ALL
SELECT 4, 'Cooling Appliances', 'Tower Fan', 2500, 8, 'Home Essentials', 'Slim and stylish tower fan for personal cooling', 3, '2023-06-19'
UNION ALL
SELECT 4, 'Cooling Appliances', 'Table Fan', 1000, 12, 'Home Essentials', 'Portable table fan for convenient cooling', 6, '2023-06-20'
UNION ALL
SELECT 4, 'Cooling Appliances', 'Air Cooler', 5000, 6, 'Appliance Superstore', 'Economical air cooler for effective cooling', 4, '2023-06-21';



INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 5, 'Entertainment Appliances', 'Television', 40000, 3, 'Electronics Emporium', 'High-definition television for immersive entertainment', 2, '2023-06-22'
UNION ALL
SELECT 5, 'Entertainment Appliances', 'Soundbar', 5000, 5, 'Electronics Emporium', 'Enhance your audio experience with a powerful soundbar', 3, '2023-06-23'
UNION ALL
SELECT 5, 'Entertainment Appliances', 'DVD Player', 2000, 8, 'Electronics Emporium', 'Enjoy your favorite movies with a reliable DVD player', 4, '2023-06-24'
UNION ALL
SELECT 5, 'Entertainment Appliances', 'Gaming Console', 30000, 2, 'Game World', 'Immerse yourself in the world of gaming with a gaming console', 1, '2023-06-25'
UNION ALL
SELECT 5, 'Entertainment Appliances', 'Speakers', 10000, 4, 'Electronics Emporium', 'Powerful speakers for rich and clear audio output', 2, '2023-06-26';



INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 6, 'Home Decor', 'Wall Art', 5000, 10, 'Decor World', 'Beautiful wall art to enhance your home decor', 5, '2023-05-05'
UNION ALL
SELECT 6, 'Home Decor', 'Curtains', 3000, 8, 'Decor World', 'Elegant curtains to add style to your windows', 4, '2023-07-10'
UNION ALL
SELECT 6, 'Home Decor', 'Decorative Pillows', 1000, 12, 'Decor World', 'Colorful decorative pillows for added comfort', 6, '2023-06-15'
UNION ALL
SELECT 6, 'Home Decor', 'Rugs', 4000, 6, 'Decor World', 'Soft and luxurious rugs to enhance your flooring', 3, '2023-07-20'
UNION ALL
SELECT 6, 'Home Decor', 'Vases', 2000, 8, 'Decor World', 'Stylish vases to display your favorite flowers', 4, '2023-05-25';


INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 7, 'Electronics', 'Laptop', 50000, 5, 'Electronics Emporium', 'Powerful laptop for work and entertainment', 3, '2023-05-15'
UNION ALL
SELECT 7, 'Electronics', 'Smartphone', 30000, 10, 'Electronics Emporium', 'Feature-packed smartphone for communication and productivity', 6, '2023-07-05'
UNION ALL
SELECT 7, 'Electronics', 'Camera', 40000, 3, 'Camera World', 'High-quality camera for capturing stunning photos', 2, '2023-06-12'
UNION ALL
SELECT 7, 'Electronics', 'Headphones', 3000, 12, 'Electronics Emporium', 'Immersive headphones for an exceptional audio experience', 8, '2023-07-25'
UNION ALL
SELECT 7, 'Electronics', 'Smartwatch', 10000, 8, 'Electronics Emporium', 'Smartwatch with various features for convenience', 4, '2023-05-20';


INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 8, 'Outdoor', 'Patio Furniture Set', 25000, 5, 'Outdoor Living Store', 'Comfortable patio furniture set for outdoor relaxation', 2, '2023-05-10'
UNION ALL
SELECT 8, 'Outdoor', 'Grill', 15000, 3, 'Outdoor Living Store', 'High-performance grill for outdoor cooking', 1, '2023-07-15'
UNION ALL
SELECT 8, 'Outdoor', 'Garden Tools Set', 2000, 10, 'Garden Supplies', 'Complete set of tools for gardening enthusiasts', 5, '2023-06-05'
UNION ALL
SELECT 8, 'Outdoor', 'Camping Tent', 5000, 6, 'Outdoor Adventure Gear', 'Spacious camping tent for outdoor adventures', 4, '2023-07-10'
UNION ALL
SELECT 8, 'Outdoor', 'Outdoor Lighting', 3000, 8, 'Outdoor Living Store', 'Stylish outdoor lighting for enhanced ambiance', 6, '2023-05-20';



-- Category: Personal Care
INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 9, 'Personal Care', 'Hair Dryer', 2000, 8, 'Beauty Essentials', 'Fast and efficient hair dryer for styling your hair', 4, '2023-05-15'
UNION ALL
SELECT 9, 'Personal Care', 'Electric Shaver', 3000, 6, 'Beauty Essentials', 'Convenient electric shaver for a smooth shave', 3, '2023-07-20'
UNION ALL
SELECT 9, 'Personal Care', 'Electric Toothbrush', 1500, 12, 'Beauty Essentials', 'Advanced electric toothbrush for optimal oral hygiene', 8, '2023-06-10'
UNION ALL
SELECT 9, 'Personal Care', 'Massager', 4000, 4, 'Wellness Store', 'Relaxing massager for relieving muscle tension', 2, '2023-07-25'
UNION ALL
SELECT 9, 'Personal Care', 'Skincare Set', 5000, 8, 'Beauty Essentials', 'Complete skincare set for a radiant complexion', 4, '2023-05-30';


INSERT INTO Inventories (category_id, category_name, inventory_name, price, quantity, seller, description, sold_items, sold_date)
SELECT 10, 'Sports Equipment', 'Treadmill', 40000, 3, 'Fitness Superstore', 'High-quality treadmill for home workouts', 2, '2023-05-25'
UNION ALL
SELECT 10, 'Sports Equipment', 'Dumbbell Set', 5000, 5, 'Fitness Superstore', 'Versatile dumbbell set for strength training', 3, '2023-07-10'
UNION ALL
SELECT 10, 'Sports Equipment', 'Yoga Mat', 1000, 10, 'Fitness Superstore', 'Non-slip yoga mat for comfortable yoga sessions', 5, '2023-06-15'
UNION ALL
SELECT 10, 'Sports Equipment', 'Bicycle', 10000, 4, 'Sports Gear Emporium', 'Stylish bicycle for outdoor rides and fitness', 2, '2023-07-20'
UNION ALL
SELECT 10, 'Sports Equipment', 'Tennis Racket', 3000, 6, 'Sports Gear Emporium', 'Quality tennis racket for a thrilling game', 4, '2023-05-30';

-- Query the Inventories table to verify the inserted data
SELECT * FROM Inventories;





CREATE TABLE Reports (
  report_id INT PRIMARY KEY,
  category_id INT,
  category_name VARCHAR(255),
  total_items INT NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

select * from Reports;





CREATE TABLE Users (
  user_id INT IDENTITY(1,1) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  category_name VARCHAR(255) NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (category_name) REFERENCES Categories(category_name)
);


select * from Users;





-- Create the stored procedure for reporting categories 
CREATE PROCEDURE Generate_Categories_Report
AS
BEGIN
  SELECT c.category_id, c.category_name, COUNT(*) AS total_inventories, SUM(i.quantity) AS total_quantity, SUM(i.price) AS total_price,
    SUM(i.quantity - ISNULL(i.sold_items, 0)) AS remaining_quantity
  FROM Categories c
  LEFT JOIN Inventories i ON c.category_id = i.category_id
  GROUP BY c.category_id, c.category_name;
END;

EXEC Generate_Categories_Report;


--this below store procedure is used to calculate the remaining no-product of product after it is sold in sold_items

CREATE PROCEDURE InsertInventoryWithSoldItems
    @category_id INT,
    @inventory_name VARCHAR(255),
    @price DECIMAL(10, 2),
    @quantity INT,
    @seller VARCHAR(255),
    @description TEXT,
    @sold_items INT
AS
BEGIN
    -- Insert the new inventory record
    INSERT INTO Inventories (category_id, inventory_name, price, quantity, seller, description, sold_items)
    VALUES (@category_id, @inventory_name, @price, @quantity, @seller, @description, @sold_items);

    -- Calculate the remaining quantity after sale
    DECLARE @remaining_quantity INT;
    SET @remaining_quantity = @quantity - @sold_items;

    -- Show the remaining quantity
    SELECT @remaining_quantity AS remaining_quantity;
END;

EXEC InsertInventoryWithSoldItems
    @category_id = 1,
    @inventory_name = 'Refrigerators',
    @price = 30000,
    @quantity = 10,
    @seller = 'No1 Electronics showroom',
    @description = 'A wide range of refrigerators for your kitchen',
    @sold_items = 5;


CREATE PROCEDURE Calculate_Remaining_Quantity
AS
BEGIN
    -- Calculate the remaining quantity for all items
    SELECT inventory_id, inventory_name, quantity - sold_items AS remaining_quantity
    FROM Inventories;
END;

EXEC Calculate_Remaining_Quantity;


--to calculate total sum of the remaining product in a table

CREATE PROCEDURE Sum_RemainingQuantity
AS
BEGIN
  SELECT SUM(i.quantity - ISNULL(i.sold_items, 0)) AS total_remaining_quantity
  FROM Inventories i;
END;


EXEC Sum_RemainingQuantity;


------------------------------------------------------

-- Create the stored procedure
CREATE PROCEDURE GetMonthlySoldItemsReport
    @Year INT,
    @Month INT
AS
BEGIN
    -- Generate the monthly sold_items report
    SELECT category_id,
           inventory_name,
           SUM(sold_items) AS total_sold_items
    FROM Inventories
    WHERE YEAR(sold_date) = @Year AND MONTH(sold_date) = @Month
    GROUP BY category_id, inventory_name
    ORDER BY category_id, inventory_name;
END;

EXEC GetMonthlySoldItemsReport @Year = 2023, @Month = 6;

----------------------------------------------------

-- Create the stored procedure
CREATE PROCEDURE GetAllMonthlySoldItemsReports
AS
BEGIN
    -- Generate the monthly sold_items report for all months
    DECLARE @Year INT = YEAR(GETDATE());
    DECLARE @Month INT = 1;
    
    WHILE (@Year <= YEAR(GETDATE()))
    BEGIN
        WHILE (@Month <= 12)
        BEGIN
            -- Generate the monthly sold_items report for the current month and year
            EXEC GetMonthlySoldItemsReport @Year, @Month;
            
            -- Increment the month
            SET @Month = @Month + 1;
        END
        
        -- Reset the month and increment the year
        SET @Month = 1;
        SET @Year = @Year + 1;
    END
END;


EXEC GetAllMonthlySoldItemsReports;
---------------------------------------------------------------

-- Create the stored procedure
CREATE PROCEDURE GenerateCompleteMonthlyReportDetail
AS
BEGIN
    -- Create a temporary table to store the aggregated monthly sold_items report
    CREATE TABLE #MonthlySoldItemsReport (
        month_year VARCHAR(7),
        category_id INT,
        inventory_name VARCHAR(255),
        total_sold_items INT
    );

    -- Get the current year and month
    DECLARE @CurrentYear INT = YEAR(GETDATE());
    DECLARE @CurrentMonth INT = MONTH(GETDATE());

    -- Loop through all months and years
    DECLARE @Year INT = @CurrentYear;
    DECLARE @Month INT = 1;

    WHILE (@Year <= @CurrentYear)
    BEGIN
        WHILE (@Month <= 12)
        BEGIN
            -- Generate the monthly sold_items report for the current month and year
            INSERT INTO #MonthlySoldItemsReport
            SELECT CONVERT(VARCHAR(7), DATEFROMPARTS(@Year, @Month, 1), 120) AS month_year,
                   category_id,
                   inventory_name,
                   SUM(sold_items) AS total_sold_items
            FROM Inventories
            WHERE YEAR(sold_date) = @Year AND MONTH(sold_date) = @Month
            GROUP BY category_id, inventory_name;

            -- Increment the month
            SET @Month = @Month + 1;
        END

        -- Reset the month and increment the year
        SET @Month = 1;
        SET @Year = @Year + 1;
    END

    -- Select the aggregated monthly sold_items report
    SELECT month_year, category_id, inventory_name, total_sold_items
    FROM #MonthlySoldItemsReport
    WHERE total_sold_items = (SELECT MAX(total_sold_items) FROM #MonthlySoldItemsReport)
    ORDER BY month_year, category_id, inventory_name;

    -- Drop the temporary table
    DROP TABLE #MonthlySoldItemsReport;
END;



EXEC GenerateCompleteMonthlyReportDetail;


----------------------------------------------------------
--------------------------------------------------

-- Create the stored procedure
CREATE PROCEDURE GenerateCompleteMonthlyDetailReport
AS
BEGIN
    -- Create a temporary table to store the aggregated monthly sold_items report
    CREATE TABLE #MonthlySoldItemsReport (
        month_year VARCHAR(7),
        category_id INT,
        category_name VARCHAR(255),
        inventory_id INT,
        inventory_name VARCHAR(255),
        price DECIMAL(10, 2),
        quantity INT,
        seller VARCHAR(255),
        description TEXT,
        sold_items INT
    );

    -- Get the current year and month
    DECLARE @CurrentYear INT = YEAR(GETDATE());
    DECLARE @CurrentMonth INT = MONTH(GETDATE());

    -- Loop through all months and years
    DECLARE @Year INT = @CurrentYear;
    DECLARE @Month INT = 1;

    WHILE (@Year <= @CurrentYear)
    BEGIN
        WHILE (@Month <= 12)
        BEGIN
            -- Generate the monthly sold_items report for the current month and year
            INSERT INTO #MonthlySoldItemsReport
            SELECT CONVERT(VARCHAR(7), DATEFROMPARTS(@Year, @Month, 1), 120) AS month_year,
                   I.category_id,
                   C.category_name,
                   I.inventory_id,
                   I.inventory_name,
                   I.price,
                   I.quantity,
                   I.seller,
                   I.description,
                   I.sold_items
            FROM Inventories AS I
            INNER JOIN Categories AS C ON I.category_id = C.category_id
            WHERE YEAR(I.sold_date) = @Year AND MONTH(I.sold_date) = @Month;

            -- Increment the month
            SET @Month = @Month + 1;
        END

        -- Reset the month and increment the year
        SET @Month = 1;
        SET @Year = @Year + 1;
    END

    -- Select the aggregated monthly sold_items report
    SELECT month_year, category_id, category_name, inventory_id, inventory_name, price, quantity, seller, description, sold_items
    FROM #MonthlySoldItemsReport
    WHERE sold_items = (SELECT MAX(sold_items) FROM #MonthlySoldItemsReport)
    ORDER BY month_year, category_id, inventory_id;

    -- Drop the temporary table
    DROP TABLE #MonthlySoldItemsReport;
END;

EXEC GenerateCompleteMonthlyDetailReport;


----------------------------------
------------------------------------
---------------------------------------

CREATE PROCEDURE Generate_Complete_Monthly_Report
AS
BEGIN
    -- Create a temporary table to store the monthly sold_items report
    CREATE TABLE #MonthlySoldItemsReport (
        month_year VARCHAR(7),
        category_id INT,
        category_name VARCHAR(255),
        inventory_id INT,
        inventory_name VARCHAR(255),
        price DECIMAL(10, 2),
        quantity INT,
        seller VARCHAR(255),
        description TEXT,
        sold_items INT,
        remaining_quantity INT
    );

    -- Get the current year and month
    DECLARE @CurrentYear INT = YEAR(GETDATE());
    DECLARE @CurrentMonth INT = MONTH(GETDATE());

    -- Loop through all months and years
    DECLARE @Year INT = @CurrentYear;
    DECLARE @Month INT = 1;

    WHILE (@Year <= @CurrentYear)
    BEGIN
        WHILE (@Month <= 12)
        BEGIN
            -- Generate the monthly sold_items report for the current month and year
            INSERT INTO #MonthlySoldItemsReport
            SELECT CONVERT(VARCHAR(7), DATEFROMPARTS(@Year, @Month, 1), 120) AS month_year,
                   I.category_id,
                   C.category_name,
                   I.inventory_id,
                   I.inventory_name,
                   I.price,
                   I.quantity,
                   I.seller,
                   I.description,
                   I.sold_items,
                   I.quantity - I.sold_items AS remaining_quantity
            FROM Inventories AS I
            INNER JOIN Categories AS C ON I.category_id = C.category_id
            WHERE YEAR(I.sold_date) = @Year AND MONTH(I.sold_date) = @Month;

            -- Increment the month
            SET @Month = @Month + 1;
        END

        -- Reset the month and increment the year
        SET @Month = 1;
        SET @Year = @Year + 1;
    END

    -- Select the aggregated monthly sold_items report
    SELECT month_year, category_id, category_name, inventory_id, inventory_name, price, quantity, seller, description, sold_items, remaining_quantity
    FROM #MonthlySoldItemsReport
    ORDER BY month_year, category_id, inventory_id;

    -- Drop the temporary table
    DROP TABLE #MonthlySoldItemsReport;
END;


EXEC Generate_Complete_Monthly_Report;


UPDATE Inventories
SET sold_items = 3
WHERE category_id = 1
    AND inventory_name = 'Stoves'
    AND price = 15000
    AND quantity = 5
    AND seller = 'Best Appliances showroom'
    AND CAST(description AS NVARCHAR(MAX)) = 'Gas and electric stoves for cooking purposes'
    AND sold_date = CAST('2023-06-02' AS DATE);

------------------------------------------------
=================================================
CREATE PROCEDURE GetCategoryData_Entertainment @categoryName VARCHAR(255)
AS
BEGIN
  DECLARE @categoryID INT
  
  -- Get the category ID based on the category name
  SELECT @categoryID = category_id
  FROM Categories
  WHERE category_name = @categoryName

  -- Retrieve data for the specified category
  SELECT CONVERT(VARCHAR(7), CAST(sold_date AS DATE), 126) AS month_year,
         C.category_id,
         C.category_name,
         I.inventory_id,
         I.inventory_name,
         I.price,
         I.quantity,
         I.seller,
         I.description,
         I.sold_items,
         I.quantity - ISNULL(I.sold_items, 0) AS remaining_quantity
  FROM Inventories I
  JOIN Categories C ON I.category_id = C.category_id
  WHERE C.category_id = @categoryID
    AND I.sold_items IS NOT NULL
    AND I.sold_date IS NOT NULL
END

EXEC GetCategoryData_Entertainment ''
============================================================================

CREATE PROCEDURE GetCategoryData_Kitchen @categoryName VARCHAR(255)
AS
BEGIN
  DECLARE @categoryID INT
  
  -- Get the category ID based on the category name
  SELECT @categoryID = category_id
  FROM Categories
  WHERE category_name = @categoryName

  -- Retrieve data for the specified category
  SELECT CONVERT(VARCHAR(7), CAST(sold_date AS DATE), 126) AS month_year,
         C.category_id,
         C.category_name,
         I.inventory_id,
         I.inventory_name,
         I.price,
         I.quantity,
         I.seller,
         I.description,
         I.sold_items,
         I.quantity - ISNULL(I.sold_items, 0) AS remaining_quantity
  FROM Inventories I
  JOIN Categories C ON I.category_id = C.category_id
  WHERE C.category_id = @categoryID
    AND I.sold_items IS NOT NULL
    AND I.sold_date IS NOT NULL
END

EXEC GetCategoryData_Kitchen 'gas Appliances'
================================================
CREATE PROCEDURE GetCategoryData_Furniture @categoryName VARCHAR(255)
AS
BEGIN
  DECLARE @categoryID INT
  
  -- Get the category ID based on the category name
  SELECT @categoryID = category_id
  FROM Categories
  WHERE category_name = @categoryName

  -- Retrieve data for the specified category
  SELECT CONVERT(VARCHAR(7), CAST(sold_date AS DATE), 126) AS month_year,
         C.category_id,
         C.category_name,
         I.inventory_id,
         I.inventory_name,
         I.price,
         I.quantity,
         I.seller,
         I.description,
         I.sold_items,
         I.quantity - ISNULL(I.sold_items, 0) AS remaining_quantity
  FROM Inventories I
  JOIN Categories C ON I.category_id = C.category_id
  WHERE C.category_id = @categoryID
    AND I.sold_items IS NOT NULL
    AND I.sold_date IS NOT NULL
END

EXEC GetCategoryData_Furniture 'Furniture-items'

===============================================================
CREATE PROCEDURE GetCategoryData_Laundry @categoryName VARCHAR(255)
AS
BEGIN
  DECLARE @categoryID INT
  
  -- Get the category ID based on the category name
  SELECT @categoryID = category_id
  FROM Categories
  WHERE category_name = @categoryName

  -- Retrieve data for the specified category
  SELECT CONVERT(VARCHAR(7), CAST(sold_date AS DATE), 126) AS month_year,
         C.category_id,
         C.category_name,
         I.inventory_id,
         I.inventory_name,
         I.price,
         I.quantity,
         I.seller,
         I.description,
         I.sold_items,
         I.quantity - ISNULL(I.sold_items, 0) AS remaining_quantity
  FROM Inventories I
  JOIN Categories C ON I.category_id = C.category_id
  WHERE C.category_id = @categoryID
    AND I.sold_items IS NOT NULL
    AND I.sold_date IS NOT NULL
END

EXEC GetCategoryData_Laundry 'Cooling Appliances'
=========================================================

CREATE PROCEDURE GetCategoryData_Cooling  @categoryName VARCHAR(255)
AS
BEGIN
  DECLARE @categoryID INT
  
  -- Get the category ID based on the category name
  SELECT @categoryID = category_id
  FROM Categories
  WHERE category_name = @categoryName

  -- Retrieve data for the specified category
  SELECT CONVERT(VARCHAR(7), CAST(sold_date AS DATE), 126) AS month_year,
         C.category_id,
         C.category_name,
         I.inventory_id,
         I.inventory_name,
         I.price,
         I.quantity,
         I.seller,
         I.description,
         I.sold_items,
         I.quantity - ISNULL(I.sold_items, 0) AS remaining_quantity
  FROM Inventories I
  JOIN Categories C ON I.category_id = C.category_id
  WHERE C.category_id = @categoryID
    AND I.sold_items IS NOT NULL
    AND I.sold_date IS NOT NULL
END

EXEC GetCategoryData_Cooling 'Gas Appliances'

==================================================================

CREATE PROCEDURE GetCategoryAndInventories
    @categoryID INT,
    @categoryName VARCHAR(255)
AS
BEGIN
    DECLARE @currentDate DATE = GETDATE();
    DECLARE @monthYear VARCHAR(7) = FORMAT(@currentDate, 'yyyy-MM');

    -- Update the Categories table dynamically
    UPDATE Categories
    SET category_name = @categoryName
    WHERE category_id = @categoryID;

    -- Retrieve the information using the updated category or new category
    IF @@ROWCOUNT = 0
    BEGIN
        -- If no rows were updated, category does not exist, so insert the new category
        INSERT INTO Categories (category_name)
        VALUES (@categoryName);

        SET @categoryID = SCOPE_IDENTITY(); -- Get the new category ID
    END

    SELECT @monthYear AS month_year,
           c.category_id,
           c.category_name,
           i.inventory_id,
           i.inventory_name,
           i.price,
           i.quantity,
           i.seller,
           i.description,
           i.sold_items,
           (i.quantity - ISNULL(i.sold_items, 0)) AS remaining_quantity
    FROM Categories c
    INNER JOIN Inventories i ON c.category_id = i.category_id
    WHERE c.category_id = @categoryID
          AND FORMAT(i.sold_date, 'yyyy-MM') = @monthYear;
END


EXECUTE GetCategoryAndInventories @categoryID = 1, @categoryName = 'New Category';

select * from Categories;

CREATE TRIGGER UpdateStoredProcOnCategoryUpdate
ON Categories
AFTER UPDATE
AS
BEGIN
    -- Check if the 'category_name' column is updated
    IF UPDATE(category_name)
    BEGIN
        -- Recreate the stored procedure
        EXEC('DROP PROCEDURE IF EXISTS GetCategoryAndInventories');
        -- Replace the 'SELECT' statement in the stored procedure with the updated one
        EXEC('CREATE PROCEDURE GetCategoryAndInventories
              @categoryID INT,
              @categoryName VARCHAR(255)
              AS
              BEGIN
                  -- Your updated SELECT statement here
                  SELECT @monthYear AS month_year,
                         c.category_id,
                         c.category_name,
                         i.inventory_id,
                         i.inventory_name,
                         i.price,
                         i.quantity,
                         i.seller,
                         i.description,
                         i.sold_items,
                         (i.quantity - ISNULL(i.sold_items, 0)) AS remaining_quantity
                  FROM Categories c
                  INNER JOIN Inventories i ON c.category_id = i.category_id
                  WHERE c.category_id = @categoryID
                        AND FORMAT(i.sold_date, ''yyyy-MM'') = @monthYear;
              END');
    END
END;


EXEC('CREATE TRIGGER UpdateStoredProcOnCategoryUpdate
ON Categories
AFTER UPDATE
AS
BEGIN
    -- Check if the ''category_name'' column is updated
    IF UPDATE(category_name)
    BEGIN
        -- Recreate the stored procedure
        EXEC(''DROP PROCEDURE IF EXISTS GetCategoryAndInventories'');
        -- Replace the ''SELECT'' statement in the stored procedure with the updated one
        EXEC(''CREATE PROCEDURE GetCategoryAndInventories
              @categoryID INT,
              @categoryName VARCHAR(255)
              AS
              BEGIN
                  -- Your updated SELECT statement here
                  SELECT @monthYear AS month_year,
                         c.category_id,
                         c.category_name,
                         i.inventory_id,
                         i.inventory_name,
                         i.price,
                         i.quantity,
                         i.seller,
                         i.description,
                         i.sold_items,
                         (i.quantity - ISNULL(i.sold_items, 0)) AS remaining_quantity
                  FROM Categories c
                  INNER JOIN Inventories i ON c.category_id = i.category_id
                  WHERE c.category_id = @categoryID
                        AND FORMAT(i.sold_date, ''''yyyy-MM'''') = @monthYear;
              END'');
    END
END;');

DROP TRIGGER IF EXISTS UpdateStoredProcOnCategoryUpdate;

EXEC GetCategoryAndInventories @categoryID = 1, @categoryName = 'Kitchen-items';



select * from Categories;

EXEC('CREATE TRIGGER UpdateStoredProcOnCategoryUpdate_New
ON dbo.Categories -- Replace "dbo.Categories" with the correct table name if necessary
AFTER UPDATE
AS
BEGIN
    -- Check if the ''category_name'' column is updated
    IF UPDATE(category_name)
    BEGIN
        -- Recreate the stored procedure
        EXEC(''DROP PROCEDURE IF EXISTS GetCategoryAndInventories'');
        -- Replace the ''SELECT'' statement in the stored procedure with the updated one
        EXEC(''CREATE PROCEDURE GetCategoryAndInventories
              @categoryID INT,
              @categoryName VARCHAR(255)
              AS
              BEGIN
                  -- Your updated SELECT statement here
                  SELECT @monthYear AS month_year,
                         c.category_id,
                         c.category_name,
                         i.inventory_id,
                         i.inventory_name,
                         i.price,
                         i.quantity,
                         i.seller,
                         i.description,
                         i.sold_items,
                         (i.quantity - ISNULL(i.sold_items, 0)) AS remaining_quantity
                  FROM dbo.Categories c -- Replace "dbo.Categories" with the correct table name if necessary
                  INNER JOIN Inventories i ON c.category_id = i.category_id
                  WHERE c.category_id = @categoryID
                        AND FORMAT(i.sold_date, ''''yyyy-MM'''') = @monthYear;
              END'');
    END
END;');

EXEC GetCategoryAndInventories @categoryID = 4, @categoryName = 'Cooling Appliances'

CREATE PROCEDURE GetCategoryAndInventories
    @categoryID INT,
    @categoryName VARCHAR(255)
AS
BEGIN
    DECLARE @monthYear VARCHAR(7) = FORMAT(GETDATE(), 'yyyy-MM');

    -- Your SELECT statement here
    SELECT @monthYear AS month_year,
           c.category_id,
           c.category_name,
           i.inventory_id,
           i.inventory_name,
           i.price,
           i.quantity,
           i.seller,
           i.description,
           i.sold_items,
           (i.quantity - ISNULL(i.sold_items, 0)) AS remaining_quantity
    FROM Categories c
    INNER JOIN Inventories i ON c.category_id = i.category_id
    WHERE c.category_id = @categoryID
        AND c.category_name = @categoryName
        AND FORMAT(i.sold_date, 'yyyy-MM') = @monthYear;
END;

select * from categories;


CREATE PROCEDURE GetCategoryReportsData
  @categoryName VARCHAR(255)
AS
BEGIN
  -- Get the category ID based on the category name
  DECLARE @categoryID INT

  SELECT @categoryID = category_id
  FROM Categories
  WHERE category_name = @categoryName

  -- Retrieve data for the specified category
  SELECT CONVERT(VARCHAR(7), CAST(sold_date AS DATE), 126) AS month_year,
         C.category_id,
         C.category_name,
         I.inventory_id,
         I.inventory_name,
         I.price,
         I.quantity,
         I.seller,
         I.description,
         I.sold_items,
         I.quantity - ISNULL(I.sold_items, 0) AS remaining_quantity
  FROM Inventories I
  JOIN Categories C ON I.category_id = C.category_id
  WHERE C.category_id = @categoryID
    AND I.sold_items IS NOT NULL
    AND I.sold_date IS NOT NULL
END


EXEC GetCategoryReportsData @categoryName = 'Personal Care';
