function ValidationAssignmentsData(req, res, next) {
    const body = req.body;

    if (!body.title) {
        return res.status(401).json({
            message: "กรุณาส่งข้อมูล Title ของโพสต์เข้ามาด้วย"
        })
    }

    if (!body.content) {
        return res.status(401).json({
            message: "กรุณาส่งข้อมูล content ของโพสต์เข้ามาด้วย"
        })
    } else {
        if (body.content.length > 1000) {
            return res.status(401).json({
                message: "กรุณาส่งข้อมูล Content ของโพสต์ตามที่กำหนดไม่เกิน 1000 ตัวอักษร"
            })
        }
    }

    if (!body.category) {
        return res.status(401).json({
            message: "กรุณาส่งข้อมูล Category  ของโพสต์เข้ามาด้วย"
        })
    } else {
        const postCategoryList = ["Math", "English", "Biology"]
        const hasPostCategoryList = postCategoryList.includes(body.category)

        if (!hasPostCategoryList) {
            return res.status(401).json({
                message: "กรุณาส่งข้อมูล Length ของโพสต์ตามที่กำหนด เช่น 'Math', 'English' หรือ 'Biology'"
            })
        }
    }

    if (!body.email) {
        return res.status(401).json({
            message: "กรุณาส่งข้อมูล Email  ของโพสต์เข้ามาด้วย"
        })
    }
    else {

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEnail = regex.test(body.email);
        if (!isEnail) {
            return res.status(401).json({
                message: "รูปแบบของ Email ไม่ถูกต้อง"
            })
        }
    }
    next();
}

export default ValidationAssignmentsData;