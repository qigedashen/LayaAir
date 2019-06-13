import { Scene3D } from "laya/d3/core/scene/Scene3D";
import { MeshRenderDynamicBatchManager } from "laya/d3/graphics/MeshRenderDynamicBatchManager";
import { MeshRenderStaticBatchManager } from "laya/d3/graphics/MeshRenderStaticBatchManager";
import { SubMeshDynamicBatch } from "laya/d3/graphics/SubMeshDynamicBatch";
import { Laya3D } from "Laya3D";
/**
 * 使用全局类的时候，避免引用其他模块
 */
export declare class ILaya3D {
    static Scene3D: typeof Scene3D;
    static MeshRenderStaticBatchManager: typeof MeshRenderStaticBatchManager;
    static MeshRenderDynamicBatchManager: typeof MeshRenderDynamicBatchManager;
    static SubMeshDynamicBatch: typeof SubMeshDynamicBatch;
    static Laya3D: typeof Laya3D;
}
